#!/bin/bash
set -e

if [ -f "/run/secrets/vault_root_token" ]; then
    VAULT_ROOT_TOKEN=$(cat /run/secrets/vault_root_token)
else
    echo "ERROR: /run/secrets/vault_root_token not found!"
    exit 1
fi

chmod -R 777 /scripts/approle 2>/dev/null || true

echo "Starting Vault server..."
su-exec vault:vault vault server -dev \
    -dev-root-token-id="${VAULT_ROOT_TOKEN}" \
    -dev-listen-address="${VAULT_DEV_LISTEN_ADDRESS:-0.0.0.0:8200}" &

VAULT_PID=$!

echo "Waiting for Vault to be healthy..."
until wget --spider -q http://127.0.0.1:8200/v1/sys/health 2>/dev/null; do
    sleep 1
done

echo "Vault is ready, running initialization..."

export VAULT_ADDR=http://127.0.0.1:8200
export VAULT_TOKEN="${VAULT_ROOT_TOKEN}"

/scripts/init-vault.sh

echo "Initialization complete, Vault is ready!"

wait $VAULT_PID
