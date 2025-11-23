RM=rm -rf
SHELL := /bin/bash -O globstar -O nullglob
MAKEFLAGS += -j$(shell nproc)

clean:
	$(RM) **/*.db* **/generated

setup: setup-auth setup-user-mgmt setup-chat \
	   setup-notification

setup-auth:
	@cd services/auth && bun i -D && bunx prisma migrate deploy && bunx prisma generate

setup-user-mgmt:
	@cd services/user-mgmt && bun i -D && bunx prisma migrate deploy && bunx prisma generate

setup-chat:
	@cd services/chat && bun i -D && bunx prisma migrate deploy && bunx prisma generate

setup-notification:
	@cd services/notification && bun i -D && bunx prisma migrate deploy && bunx prisma generate

.PHONY: setup setup-auth setup-user-mgmt setup-chat setup-notification
