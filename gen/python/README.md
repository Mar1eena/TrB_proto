# TrB proto — Python

Сгенерированные protobuf/gRPC stubs для Python-сервисов TrB.

## Установка

```bash
pip install trb-proto
```

Зафиксировать версию (как в Docker-сервисе `indicators`):

```bash
pip install trb-proto==1.0.34
```

Пакет публикуется на PyPI при релизе (`make rel`).

## Пример: gRPC-клиент

```python
import grpc
from indicators import indicators_pb2 as pb
from indicators import indicators_pb2_grpc

channel = grpc.insecure_channel("localhost:9093")
stub = indicators_pb2_grpc.IndicatorsStub(channel)

supported = stub.ListSupported(pb.ListSupportedRequest())
print([i.name for i in supported.indicators])
```

## Пример: gRPC-сервер

```python
from concurrent import futures

import grpc
from indicators import indicators_pb2_grpc

class IndicatorsServicer(indicators_pb2_grpc.IndicatorsServicer):
    ...

server = grpc.server(futures.ThreadPoolExecutor(max_workers=4))
indicators_pb2_grpc.add_IndicatorsServicer_to_server(IndicatorsServicer(), server)
server.add_insecure_port("[::]:9093")
server.start()
server.wait_for_termination()
```

## Docker (TrB_backend)

```dockerfile
ARG TRB_PROTO_VERSION=1.0.34
RUN pip install "trb-proto==${TRB_PROTO_VERSION}"
```

В `.env`:

```env
TRB_PROTO_VERSION=1.0.34
TRB_PROTO_SOURCE=pypi
```

До первой публикации на PyPI: `TRB_PROTO_SOURCE=git` (установка из GitHub-тега).

## Локальная разработка

```bash
# editable install из соседнего репозитория
pip install -e ../TrB_proto

# после изменения proto
cd TrB_proto && make gene
```

## Trusted Publisher (PyPI)

[Pending publisher](https://pypi.org/manage/account/publishing/) **до первого** релиза, если проекта ещё нет:

| Поле | Значение |
|------|----------|
| PyPI project name | `trb-proto` |
| Owner | `Mar1eena` |
| Repository | `TrB_proto` |
| Workflow name | `release.yml` |
| Environment name | *(пусто)* |

GitHub Actions workflow: `.github/workflows/release.yml`, action `pypa/gh-action-pypi-publish@v1.14.2`.

## Зависимости пакета

- `protobuf>=4.25.0`
- `grpcio>=1.60.0`

[← Корневой README](../../README.md)
