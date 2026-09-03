# TrB proto

Protobuf/gRPC-контракты сервисов TrB и сгенерированный код для нескольких языков.

| Язык | Артефакт | Документация |
|------|----------|--------------|
| Go | модуль `github.com/Mar1eena/trb_proto` | [gen/go/README.md](gen/go/README.md) |
| JavaScript / TypeScript | npm [`@marleena/trb-proto`](https://www.npmjs.com/package/@marleena/trb-proto) | [gen/js-ts/README.md](gen/js-ts/README.md) |
| Python | PyPI [`trb-proto`](https://pypi.org/project/trb-proto/) | [gen/python/README.md](gen/python/README.md) |

## Генерация

Нужны `protoc` и плагины: `protoc-gen-go`, `protoc-gen-go-grpc`, `protoc-gen-grpc-gateway`, `protoc-gen-js`, `protoc-gen-grpc-web`, `grpc_tools` (Python).

```bash
make gene
```

Собирает Go, JS/TS, Python (indicators) и descriptor set (`gen/desc/trb_protos.pb`). Google API-аннотации для JS генерируются отдельно, чтобы не попасть в `gen/go`.

Другие цели: `make desc`, `make buf`.

## Сервисы

Исходники proto — в `services/`.

**Внешние контракты** (`services/api/`): `api/tinvest` — зеркало T-Invest API.

**Свои сервисы:**

| Каталог | gRPC-сервисы |
|---------|--------------|
| `clickhouse` | `ClickHouse_Admin`, `ClickHouse` |
| `postgresql` | `PostgreSQL_Admin`, `PostgreSQL` |
| `nats` | `Nats_Admin` |
| `indicators` | `Indicators`, `Settings` |
| `test` | `Test` |

`clickhouse` — `admin.proto` и `clickhouse.proto`.  
`postgresql` — `admin.proto` (DDL, мониторинг) и `postgresql.proto` (планировщик: `ListSchedulerTargets`, `SyncSchedulerTargets`).

## Релиз

```bash
make rel
```

Собирает proto, поднимает patch-версию в `package.json` / `pyproject.toml`, коммитит с сообщением `v1.2.3` и пушит в `main`.

Другой шаг версии: `make rel PART=minor` или `PART=major`.

Для коммита нужны `user.name` и `user.email` в Git.

## CI/CD

[Release](.github/workflows/release.yml) на коммит `v1.2.3` в `main`:

- npm — `@marleena/trb-proto` (если версии ещё нет)
- PyPI — `trb-proto`
- Go — обновление [pkg.go.dev](https://pkg.go.dev/github.com/Mar1eena/trb_proto)

Подробности публикации — в README соответствующего языка.
