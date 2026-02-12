FROM grafana/grafana:latest

USER root

RUN apk update

RUN apk add openssl

WORKDIR /etc/grafana/ssl

COPY ./config/grafana.ini /etc/grafana/.

COPY ./scripts/setup_grafana.sh /.

COPY ./scripts/setup_TLS.sh /.

COPY ./dashboards/ /dashboards/

COPY ./datasources/ /datasources/

WORKDIR /

RUN bash setup_TLS.sh

RUN --mount=type=secret,id=admin_password,target=/run/secrets/admin_password bash setup_grafana.sh

EXPOSE 3000
