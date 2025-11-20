RM=rm
SHELL := /bin/bash -O globstar -O nullglob
MAKEFLAGS += -j$(shell nproc)

clean:
	$(RM) **/*.db*

setup: setup-auth setup-user-mgmt setup-chat \
	   setup-notification

setup-auth:
	@cd services/auth && bunx prisma migrate deploy

setup-user-mgmt:
	@cd services/user-mgmt && bunx prisma migrate deploy

setup-chat:
	@cd services/chat && bunx prisma migrate deploy

setup-notification:
	@cd services/notification && bunx prisma migrate deploy

.PHONY: setup setup-auth setup-user-mgmt setup-chat setup-notification
