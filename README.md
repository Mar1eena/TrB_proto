# TrB proto

Контракты сервисов и сгенерированный код:

- Go — `gen/go`
- JavaScript / TypeScript (protobuf + gRPC-Web) — npm-пакет [`@marleena/trb-proto`](https://www.npmjs.com/package/@marleena/trb-proto)
- Python (protobuf + gRPC) — PyPI-пакет [`trb-proto`](https://pypi.org/project/trb-proto/)

## Генерация

Нужны `protoc` и плагины: `protoc-gen-go`, `protoc-gen-go-grpc`, `protoc-gen-grpc-gateway`, `protoc-gen-js`, `protoc-gen-grpc-web`.

```bash
make gene
```

Собирает Go, JS/TS и descriptor set. Google API-аннотации для JS генерируются отдельно, чтобы не попасть в `gen/go`.

Другие цели: `make desc`, `make buf`.

## npm

```bash
npm install @marleena/trb-proto
```

```ts
import { MessageRequest } from '@marleena/trb-proto/example/Example_pb';
import { exampleClient } from '@marleena/trb-proto/example/ExampleServiceClientPb';

const client = new exampleClient('https://api.example.com');
const req = new MessageRequest();
req.setText('hello');
```

## Python

```bash
pip install trb-proto
```

```python
from indicators import indicators_pb2 as pb
from indicators import indicators_pb2_grpc

stub = indicators_pb2_grpc.IndicatorsStub(channel)
stub.ListSupported(pb.ListSupportedRequest())
```

Сервисы:

Внешние контракты в `api/`: `api/tinvest`.

Свои сервисы: `clickhouse`, `nats`, `postgresql`, `test`.

`clickhouse` — два proto: `admin.proto` (`trb.clickhouse.v1.ClickHouse_Admin`) и `clickhouse.proto` (`trb.clickhouse.v1.ClickHouse`).

`postgresql` — два proto: `admin.proto` (`trb.postgresql.v1.PostgreSQL_Admin`) и `postgresql.proto` (`trb.postgresql.v1.PostgreSQL`).

`postgresql` (`trb.postgresql.v1.PostgreSQL`) — цели планировщика: `ListSchedulerTargets`, `SyncSchedulerTargets`.

`PostgreSQL_Admin` — DDL, мониторинг и произвольные запросы: базы, схемы, таблицы, колонки, индексы, VACUUM/ANALYZE, процессы, блокировки.

`nats` (`trb.nats.v1.Nats`) — управление JetStream.

`test` (`trb.test.v1.Test`) — тестовый оркестратор.

## CI/CD

[Release](.github/workflows/release.yml) на коммит `v1.2.3` в `main`: npm (если версии ещё нет), PyPI `trb-proto` и `POST /fetch/...` на [pkg.go.dev](https://pkg.go.dev/github.com/Mar1eena/trb_proto).

Trusted Publisher: npm — GitHub `Mar1eena` / `TrB_proto` / `release.yml`; PyPI — [Pending publisher](https://pypi.org/manage/account/publishing/) для `trb-proto`:

| Поле | Значение |
|---|---|
| PyPI project name | `trb-proto` |
| Owner | `Mar1eena` |
| Repository | `TrB_proto` |
| Workflow name | `release.yml` |
| Environment name | *(оставить пустым)* |

Pending publisher нужен **до первого** `make rel`, если проекта `trb-proto` на PyPI ещё нет.

## Релиз

```bash
make rel
```

Собирает proto, поднимает patch-версию, коммитит все изменения с сообщением `v1.2.3` и пушит в `main`. Actions публикует npm и обновляет pkg.go.dev.

Другой шаг версии: `make rel PART=minor` или `PART=major`.

Для коммита нужны `user.name` и `user.email` в Git.
