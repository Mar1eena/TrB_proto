# TrB proto — Go

Сгенерированный Go-код: gRPC, grpc-gateway, protobuf.

## Установка

```bash
go get github.com/Mar1eena/trb_proto@latest
```

Или зафиксировать версию:

```bash
go get github.com/Mar1eena/trb_proto@v1.0.34
```

Модуль обновляется при релизе (`make rel` → push `v1.2.3` → pkg.go.dev подхватывает тег).

## Импорты

```go
import (
    chmgr "github.com/Mar1eena/trb_proto/gen/go/clickhouse"
    pgmgr "github.com/Mar1eena/trb_proto/gen/go/postgresql"
    indicators "github.com/Mar1eena/trb_proto/gen/go/indicators"
    tinvest "github.com/Mar1eena/trb_proto/gen/go/api/tinvest"
)
```

## Пример: gRPC-клиент

```go
conn, err := grpc.Dial("clickhouse:9091", grpc.WithInsecure())
if err != nil {
    return err
}
defer conn.Close()

client := chmgr.NewClickHouseClient(conn)
resp, err := client.ListCandles(ctx, &chmgr.ListCandlesRequest{
    Uid:      "…",
    Interval: 5,
    // …
})
```

## Регистрация сервера

```go
import (
    chmgr "github.com/Mar1eena/trb_proto/gen/go/clickhouse"
    indicators "github.com/Mar1eena/trb_proto/gen/go/indicators"
)

chmgr.RegisterClickHouseServer(grpcServer, clickhouseService)
indicators.RegisterIndicatorsServer(grpcServer, indicatorsService)
```

## HTTP (grpc-gateway)

Сгенерированные `*.pb.gw.go` регистрируются в grpc-gateway или проксируются через Envoy с `gen/desc/trb_protos.pb`.

## Локальная разработка

```bash
# из репозитория TrB_backend
go get github.com/Mar1eena/trb_proto@main
# или replace в go.mod:
# replace github.com/Mar1eena/trb_proto => ../TrB_proto
```

После изменения `.proto`:

```bash
make gene
go mod tidy
```

[← Корневой README](../../README.md)
