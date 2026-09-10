import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from strategy import spec_pb2 as _spec_pb2
from strategy import backtest_pb2 as _backtest_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SearchMethod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SEARCH_METHOD_UNSPECIFIED: _ClassVar[SearchMethod]
    SEARCH_METHOD_GENETIC: _ClassVar[SearchMethod]
SEARCH_METHOD_UNSPECIFIED: SearchMethod
SEARCH_METHOD_GENETIC: SearchMethod

class IntRange(_message.Message):
    __slots__ = ("min", "max", "step")
    MIN_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    STEP_FIELD_NUMBER: _ClassVar[int]
    min: int
    max: int
    step: int
    def __init__(self, min: _Optional[int] = ..., max: _Optional[int] = ..., step: _Optional[int] = ...) -> None: ...

class FloatRange(_message.Message):
    __slots__ = ("min", "max", "step")
    MIN_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    STEP_FIELD_NUMBER: _ClassVar[int]
    min: float
    max: float
    step: float
    def __init__(self, min: _Optional[float] = ..., max: _Optional[float] = ..., step: _Optional[float] = ...) -> None: ...

class Choice(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, values: _Optional[_Iterable[float]] = ...) -> None: ...

class ParamRange(_message.Message):
    __slots__ = ("path", "ints", "floats", "choice")
    PATH_FIELD_NUMBER: _ClassVar[int]
    INTS_FIELD_NUMBER: _ClassVar[int]
    FLOATS_FIELD_NUMBER: _ClassVar[int]
    CHOICE_FIELD_NUMBER: _ClassVar[int]
    path: str
    ints: IntRange
    floats: FloatRange
    choice: Choice
    def __init__(self, path: _Optional[str] = ..., ints: _Optional[_Union[IntRange, _Mapping]] = ..., floats: _Optional[_Union[FloatRange, _Mapping]] = ..., choice: _Optional[_Union[Choice, _Mapping]] = ...) -> None: ...

class StructureSpace(_message.Message):
    __slots__ = ("indicator_palette", "max_conditions", "max_depth", "allowed_ops", "mutate_structure")
    INDICATOR_PALETTE_FIELD_NUMBER: _ClassVar[int]
    MAX_CONDITIONS_FIELD_NUMBER: _ClassVar[int]
    MAX_DEPTH_FIELD_NUMBER: _ClassVar[int]
    ALLOWED_OPS_FIELD_NUMBER: _ClassVar[int]
    MUTATE_STRUCTURE_FIELD_NUMBER: _ClassVar[int]
    indicator_palette: _containers.RepeatedScalarFieldContainer[str]
    max_conditions: int
    max_depth: int
    allowed_ops: _containers.RepeatedScalarFieldContainer[_spec_pb2.CompareOp]
    mutate_structure: bool
    def __init__(self, indicator_palette: _Optional[_Iterable[str]] = ..., max_conditions: _Optional[int] = ..., max_depth: _Optional[int] = ..., allowed_ops: _Optional[_Iterable[_Union[_spec_pb2.CompareOp, str]]] = ..., mutate_structure: bool = ...) -> None: ...

class Objective(_message.Message):
    __slots__ = ("metric", "maximize", "min_trades", "max_drawdown_limit")
    METRIC_FIELD_NUMBER: _ClassVar[int]
    MAXIMIZE_FIELD_NUMBER: _ClassVar[int]
    MIN_TRADES_FIELD_NUMBER: _ClassVar[int]
    MAX_DRAWDOWN_LIMIT_FIELD_NUMBER: _ClassVar[int]
    metric: str
    maximize: bool
    min_trades: int
    max_drawdown_limit: float
    def __init__(self, metric: _Optional[str] = ..., maximize: bool = ..., min_trades: _Optional[int] = ..., max_drawdown_limit: _Optional[float] = ...) -> None: ...

class SearchBudget(_message.Message):
    __slots__ = ("max_evaluations", "max_seconds", "concurrency", "population", "generations", "seed", "halving_eta", "low_fidelity_frac", "disable_cache")
    MAX_EVALUATIONS_FIELD_NUMBER: _ClassVar[int]
    MAX_SECONDS_FIELD_NUMBER: _ClassVar[int]
    CONCURRENCY_FIELD_NUMBER: _ClassVar[int]
    POPULATION_FIELD_NUMBER: _ClassVar[int]
    GENERATIONS_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    HALVING_ETA_FIELD_NUMBER: _ClassVar[int]
    LOW_FIDELITY_FRAC_FIELD_NUMBER: _ClassVar[int]
    DISABLE_CACHE_FIELD_NUMBER: _ClassVar[int]
    max_evaluations: int
    max_seconds: int
    concurrency: int
    population: int
    generations: int
    seed: int
    halving_eta: int
    low_fidelity_frac: float
    disable_cache: bool
    def __init__(self, max_evaluations: _Optional[int] = ..., max_seconds: _Optional[int] = ..., concurrency: _Optional[int] = ..., population: _Optional[int] = ..., generations: _Optional[int] = ..., seed: _Optional[int] = ..., halving_eta: _Optional[int] = ..., low_fidelity_frac: _Optional[float] = ..., disable_cache: bool = ...) -> None: ...

class EvalTask(_message.Message):
    __slots__ = ("eval_id", "search_id", "spec", "config", "data_fraction", "reply_subject")
    EVAL_ID_FIELD_NUMBER: _ClassVar[int]
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    DATA_FRACTION_FIELD_NUMBER: _ClassVar[int]
    REPLY_SUBJECT_FIELD_NUMBER: _ClassVar[int]
    eval_id: str
    search_id: str
    spec: _spec_pb2.StrategySpec
    config: _backtest_pb2.BacktestConfig
    data_fraction: float
    reply_subject: str
    def __init__(self, eval_id: _Optional[str] = ..., search_id: _Optional[str] = ..., spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ..., config: _Optional[_Union[_backtest_pb2.BacktestConfig, _Mapping]] = ..., data_fraction: _Optional[float] = ..., reply_subject: _Optional[str] = ...) -> None: ...

class EvalResult(_message.Message):
    __slots__ = ("eval_id", "metrics", "error", "engine_version")
    class MetricsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    EVAL_ID_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    ENGINE_VERSION_FIELD_NUMBER: _ClassVar[int]
    eval_id: str
    metrics: _containers.ScalarMap[str, float]
    error: str
    engine_version: str
    def __init__(self, eval_id: _Optional[str] = ..., metrics: _Optional[_Mapping[str, float]] = ..., error: _Optional[str] = ..., engine_version: _Optional[str] = ...) -> None: ...

class SearchCandidate(_message.Message):
    __slots__ = ("id", "spec", "spec_hash", "score", "metrics", "rank", "generation", "backtest_run_id")
    ID_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    SPEC_HASH_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    RANK_FIELD_NUMBER: _ClassVar[int]
    GENERATION_FIELD_NUMBER: _ClassVar[int]
    BACKTEST_RUN_ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    spec: _spec_pb2.StrategySpec
    spec_hash: int
    score: float
    metrics: _backtest_pb2.BacktestMetrics
    rank: int
    generation: int
    backtest_run_id: str
    def __init__(self, id: _Optional[str] = ..., spec: _Optional[_Union[_spec_pb2.StrategySpec, _Mapping]] = ..., spec_hash: _Optional[int] = ..., score: _Optional[float] = ..., metrics: _Optional[_Union[_backtest_pb2.BacktestMetrics, _Mapping]] = ..., rank: _Optional[int] = ..., generation: _Optional[int] = ..., backtest_run_id: _Optional[str] = ...) -> None: ...

class SearchProgress(_message.Message):
    __slots__ = ("status", "evaluated", "total", "best_score", "best_candidate_id", "current_generation", "error")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    EVALUATED_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    BEST_SCORE_FIELD_NUMBER: _ClassVar[int]
    BEST_CANDIDATE_ID_FIELD_NUMBER: _ClassVar[int]
    CURRENT_GENERATION_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    status: _backtest_pb2.RunStatus
    evaluated: int
    total: int
    best_score: float
    best_candidate_id: str
    current_generation: int
    error: str
    def __init__(self, status: _Optional[_Union[_backtest_pb2.RunStatus, str]] = ..., evaluated: _Optional[int] = ..., total: _Optional[int] = ..., best_score: _Optional[float] = ..., best_candidate_id: _Optional[str] = ..., current_generation: _Optional[int] = ..., error: _Optional[str] = ...) -> None: ...

class SearchRun(_message.Message):
    __slots__ = ("search_id", "base_strategy_id", "name", "method", "search_space", "structure", "objective", "budget", "config", "progress", "engine_version", "created_at", "started_at", "finished_at")
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    BASE_STRATEGY_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    SEARCH_SPACE_FIELD_NUMBER: _ClassVar[int]
    STRUCTURE_FIELD_NUMBER: _ClassVar[int]
    OBJECTIVE_FIELD_NUMBER: _ClassVar[int]
    BUDGET_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    ENGINE_VERSION_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    STARTED_AT_FIELD_NUMBER: _ClassVar[int]
    FINISHED_AT_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    base_strategy_id: str
    name: str
    method: SearchMethod
    search_space: _containers.RepeatedCompositeFieldContainer[ParamRange]
    structure: StructureSpace
    objective: Objective
    budget: SearchBudget
    config: _backtest_pb2.BacktestConfig
    progress: SearchProgress
    engine_version: str
    created_at: _timestamp_pb2.Timestamp
    started_at: _timestamp_pb2.Timestamp
    finished_at: _timestamp_pb2.Timestamp
    def __init__(self, search_id: _Optional[str] = ..., base_strategy_id: _Optional[str] = ..., name: _Optional[str] = ..., method: _Optional[_Union[SearchMethod, str]] = ..., search_space: _Optional[_Iterable[_Union[ParamRange, _Mapping]]] = ..., structure: _Optional[_Union[StructureSpace, _Mapping]] = ..., objective: _Optional[_Union[Objective, _Mapping]] = ..., budget: _Optional[_Union[SearchBudget, _Mapping]] = ..., config: _Optional[_Union[_backtest_pb2.BacktestConfig, _Mapping]] = ..., progress: _Optional[_Union[SearchProgress, _Mapping]] = ..., engine_version: _Optional[str] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., started_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., finished_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class SearchTask(_message.Message):
    __slots__ = ("search_id",)
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    def __init__(self, search_id: _Optional[str] = ...) -> None: ...
