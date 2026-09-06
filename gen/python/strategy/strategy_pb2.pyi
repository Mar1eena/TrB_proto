import datetime

from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from strategy import spec_pb2 as _spec_pb2
from strategy import backtest_pb2 as _backtest_pb2
from strategy import search_pb2 as _search_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Strategy(_message.Message):
    __slots__ = ("id", "name", "description", "spec", "spec_hash", "spec_version", "archived", "created_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    SPEC_HASH_FIELD_NUMBER: _ClassVar[int]
    SPEC_VERSION_FIELD_NUMBER: _ClassVar[int]
    ARCHIVED_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    description: str
    spec: _spec_pb2.StrategySpec
    spec_hash: int
    spec_version: int
    archived: bool
    created_at: _timestamp_pb2.Timestamp
    updated_at: _timestamp_pb2.Timestamp
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ..., spec_hash: _Optional[int] = ..., spec_version: _Optional[int] = ..., archived: bool = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., updated_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class CreateStrategyRequest(_message.Message):
    __slots__ = ("name", "description", "spec")
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    name: str
    description: str
    spec: _spec_pb2.StrategySpec
    def __init__(self, name: _Optional[str] = ..., description: _Optional[str] = ..., spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ...) -> None: ...

class GetStrategyRequest(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class ListStrategiesRequest(_message.Message):
    __slots__ = ("q", "include_archived", "limit", "offset")
    Q_FIELD_NUMBER: _ClassVar[int]
    INCLUDE_ARCHIVED_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    q: str
    include_archived: bool
    limit: int
    offset: int
    def __init__(self, q: _Optional[str] = ..., include_archived: bool = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...

class ListStrategiesResponse(_message.Message):
    __slots__ = ("items", "total")
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[Strategy]
    total: int
    def __init__(self, items: _Optional[_Iterable[_Union[Strategy, _Mapping]]] = ..., total: _Optional[int] = ...) -> None: ...

class UpdateStrategyRequest(_message.Message):
    __slots__ = ("id", "name", "description", "spec")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    description: str
    spec: _spec_pb2.StrategySpec
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ...) -> None: ...

class DeleteStrategyRequest(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class DeleteStrategyResponse(_message.Message):
    __slots__ = ("id", "archived")
    ID_FIELD_NUMBER: _ClassVar[int]
    ARCHIVED_FIELD_NUMBER: _ClassVar[int]
    id: str
    archived: bool
    def __init__(self, id: _Optional[str] = ..., archived: bool = ...) -> None: ...

class ValidationIssue(_message.Message):
    __slots__ = ("path", "message")
    PATH_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    path: str
    message: str
    def __init__(self, path: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class ValidateStrategyRequest(_message.Message):
    __slots__ = ("spec",)
    SPEC_FIELD_NUMBER: _ClassVar[int]
    spec: _spec_pb2.StrategySpec
    def __init__(self, spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ...) -> None: ...

class ValidateStrategyResponse(_message.Message):
    __slots__ = ("ok", "issues")
    OK_FIELD_NUMBER: _ClassVar[int]
    ISSUES_FIELD_NUMBER: _ClassVar[int]
    ok: bool
    issues: _containers.RepeatedCompositeFieldContainer[ValidationIssue]
    def __init__(self, ok: bool = ..., issues: _Optional[_Iterable[_Union[ValidationIssue, _Mapping]]] = ...) -> None: ...

class SubmitBacktestRequest(_message.Message):
    __slots__ = ("strategy_id", "spec", "config", "force")
    STRATEGY_ID_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    FORCE_FIELD_NUMBER: _ClassVar[int]
    strategy_id: str
    spec: _spec_pb2.StrategySpec
    config: _backtest_pb2.BacktestConfig
    force: bool
    def __init__(self, strategy_id: _Optional[str] = ..., spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ..., config: _Optional[_Union[_backtest_pb2.BacktestConfig, _Mapping]] = ..., force: bool = ...) -> None: ...

class SubmitBacktestResponse(_message.Message):
    __slots__ = ("run_id", "status", "reused")
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    REUSED_FIELD_NUMBER: _ClassVar[int]
    run_id: str
    status: _backtest_pb2.RunStatus
    reused: bool
    def __init__(self, run_id: _Optional[str] = ..., status: _Optional[_Union[_backtest_pb2.RunStatus, str]] = ..., reused: bool = ...) -> None: ...

class GetBacktestStatusRequest(_message.Message):
    __slots__ = ("run_id",)
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    run_id: str
    def __init__(self, run_id: _Optional[str] = ...) -> None: ...

class GetBacktestResultRequest(_message.Message):
    __slots__ = ("run_id", "include_equity", "include_trades", "equity_max_points")
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    INCLUDE_EQUITY_FIELD_NUMBER: _ClassVar[int]
    INCLUDE_TRADES_FIELD_NUMBER: _ClassVar[int]
    EQUITY_MAX_POINTS_FIELD_NUMBER: _ClassVar[int]
    run_id: str
    include_equity: bool
    include_trades: bool
    equity_max_points: int
    def __init__(self, run_id: _Optional[str] = ..., include_equity: bool = ..., include_trades: bool = ..., equity_max_points: _Optional[int] = ...) -> None: ...

class GetBacktestResultResponse(_message.Message):
    __slots__ = ("run", "metrics", "equity", "trades")
    RUN_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    EQUITY_FIELD_NUMBER: _ClassVar[int]
    TRADES_FIELD_NUMBER: _ClassVar[int]
    run: _backtest_pb2.BacktestRun
    metrics: _backtest_pb2.BacktestMetrics
    equity: _containers.RepeatedCompositeFieldContainer[_backtest_pb2.EquityPoint]
    trades: _containers.RepeatedCompositeFieldContainer[_backtest_pb2.TradeRecord]
    def __init__(self, run: _Optional[_Union[_backtest_pb2.BacktestRun, _Mapping]] = ..., metrics: _Optional[_Union[_backtest_pb2.BacktestMetrics, _Mapping]] = ..., equity: _Optional[_Iterable[_Union[_backtest_pb2.EquityPoint, _Mapping]]] = ..., trades: _Optional[_Iterable[_Union[_backtest_pb2.TradeRecord, _Mapping]]] = ...) -> None: ...

class ListBacktestRunsRequest(_message.Message):
    __slots__ = ("strategy_id", "uid", "status", "search_run_id", "sort_by", "sort_desc", "limit", "offset")
    STRATEGY_ID_FIELD_NUMBER: _ClassVar[int]
    UID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    SEARCH_RUN_ID_FIELD_NUMBER: _ClassVar[int]
    SORT_BY_FIELD_NUMBER: _ClassVar[int]
    SORT_DESC_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    strategy_id: str
    uid: str
    status: _backtest_pb2.RunStatus
    search_run_id: str
    sort_by: str
    sort_desc: bool
    limit: int
    offset: int
    def __init__(self, strategy_id: _Optional[str] = ..., uid: _Optional[str] = ..., status: _Optional[_Union[_backtest_pb2.RunStatus, str]] = ..., search_run_id: _Optional[str] = ..., sort_by: _Optional[str] = ..., sort_desc: bool = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...

class BacktestRunListItem(_message.Message):
    __slots__ = ("run", "metrics")
    RUN_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    run: _backtest_pb2.BacktestRun
    metrics: _backtest_pb2.BacktestMetrics
    def __init__(self, run: _Optional[_Union[_backtest_pb2.BacktestRun, _Mapping]] = ..., metrics: _Optional[_Union[_backtest_pb2.BacktestMetrics, _Mapping]] = ...) -> None: ...

class ListBacktestRunsResponse(_message.Message):
    __slots__ = ("items", "total")
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[BacktestRunListItem]
    total: int
    def __init__(self, items: _Optional[_Iterable[_Union[BacktestRunListItem, _Mapping]]] = ..., total: _Optional[int] = ...) -> None: ...

class CancelBacktestRequest(_message.Message):
    __slots__ = ("run_id",)
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    run_id: str
    def __init__(self, run_id: _Optional[str] = ...) -> None: ...

class SubmitSearchRequest(_message.Message):
    __slots__ = ("base_strategy_id", "base_spec", "name", "method", "search_space", "structure", "objective", "budget", "config")
    BASE_STRATEGY_ID_FIELD_NUMBER: _ClassVar[int]
    BASE_SPEC_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    SEARCH_SPACE_FIELD_NUMBER: _ClassVar[int]
    STRUCTURE_FIELD_NUMBER: _ClassVar[int]
    OBJECTIVE_FIELD_NUMBER: _ClassVar[int]
    BUDGET_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    base_strategy_id: str
    base_spec: _spec_pb2.StrategySpec
    name: str
    method: _search_pb2.SearchMethod
    search_space: _containers.RepeatedCompositeFieldContainer[_search_pb2.ParamRange]
    structure: _search_pb2.StructureSpace
    objective: _search_pb2.Objective
    budget: _search_pb2.SearchBudget
    config: _backtest_pb2.BacktestConfig
    def __init__(self, base_strategy_id: _Optional[str] = ..., base_spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ..., name: _Optional[str] = ..., method: _Optional[_Union[_search_pb2.SearchMethod, str]] = ..., search_space: _Optional[_Iterable[_Union[_search_pb2.ParamRange, _Mapping]]] = ..., structure: _Optional[_Union[_search_pb2.StructureSpace, _Mapping]] = ..., objective: _Optional[_Union[_search_pb2.Objective, _Mapping]] = ..., budget: _Optional[_Union[_search_pb2.SearchBudget, _Mapping]] = ..., config: _Optional[_Union[_backtest_pb2.BacktestConfig, _Mapping]] = ...) -> None: ...

class SubmitSearchResponse(_message.Message):
    __slots__ = ("search_id", "status")
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    status: _backtest_pb2.RunStatus
    def __init__(self, search_id: _Optional[str] = ..., status: _Optional[_Union[_backtest_pb2.RunStatus, str]] = ...) -> None: ...

class GetSearchProgressRequest(_message.Message):
    __slots__ = ("search_id",)
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    def __init__(self, search_id: _Optional[str] = ...) -> None: ...

class GetBestStrategiesRequest(_message.Message):
    __slots__ = ("search_id", "top_k")
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    TOP_K_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    top_k: int
    def __init__(self, search_id: _Optional[str] = ..., top_k: _Optional[int] = ...) -> None: ...

class GetBestStrategiesResponse(_message.Message):
    __slots__ = ("items",)
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_search_pb2.SearchCandidate]
    def __init__(self, items: _Optional[_Iterable[_Union[_search_pb2.SearchCandidate, _Mapping]]] = ...) -> None: ...

class ListSearchesRequest(_message.Message):
    __slots__ = ("status", "limit", "offset")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    status: _backtest_pb2.RunStatus
    limit: int
    offset: int
    def __init__(self, status: _Optional[_Union[_backtest_pb2.RunStatus, str]] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...

class ListSearchesResponse(_message.Message):
    __slots__ = ("items", "total")
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[_search_pb2.SearchRun]
    total: int
    def __init__(self, items: _Optional[_Iterable[_Union[_search_pb2.SearchRun, _Mapping]]] = ..., total: _Optional[int] = ...) -> None: ...

class CancelSearchRequest(_message.Message):
    __slots__ = ("search_id",)
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    def __init__(self, search_id: _Optional[str] = ...) -> None: ...
