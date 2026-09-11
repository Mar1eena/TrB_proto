import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from strategysearch import spec_pb2 as _spec_pb2
from strategysearch import backtest_pb2 as _backtest_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TrialState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TRIAL_STATE_UNSPECIFIED: _ClassVar[TrialState]
    TRIAL_STATE_RUNNING: _ClassVar[TrialState]
    TRIAL_STATE_WAITING: _ClassVar[TrialState]
    TRIAL_STATE_COMPLETE: _ClassVar[TrialState]
    TRIAL_STATE_PRUNED: _ClassVar[TrialState]
    TRIAL_STATE_FAIL: _ClassVar[TrialState]
TRIAL_STATE_UNSPECIFIED: TrialState
TRIAL_STATE_RUNNING: TrialState
TRIAL_STATE_WAITING: TrialState
TRIAL_STATE_COMPLETE: TrialState
TRIAL_STATE_PRUNED: TrialState
TRIAL_STATE_FAIL: TrialState

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

class LogFloatRange(_message.Message):
    __slots__ = ("min", "max")
    MIN_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    min: float
    max: float
    def __init__(self, min: _Optional[float] = ..., max: _Optional[float] = ...) -> None: ...

class Choice(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, values: _Optional[_Iterable[float]] = ...) -> None: ...

class CategoricalChoice(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, values: _Optional[_Iterable[str]] = ...) -> None: ...

class ParamRange(_message.Message):
    __slots__ = ("path", "ints", "floats", "log_floats", "choice", "categorical")
    PATH_FIELD_NUMBER: _ClassVar[int]
    INTS_FIELD_NUMBER: _ClassVar[int]
    FLOATS_FIELD_NUMBER: _ClassVar[int]
    LOG_FLOATS_FIELD_NUMBER: _ClassVar[int]
    CHOICE_FIELD_NUMBER: _ClassVar[int]
    CATEGORICAL_FIELD_NUMBER: _ClassVar[int]
    path: str
    ints: IntRange
    floats: FloatRange
    log_floats: LogFloatRange
    choice: Choice
    categorical: CategoricalChoice
    def __init__(self, path: _Optional[str] = ..., ints: _Optional[_Union[IntRange, _Mapping]] = ..., floats: _Optional[_Union[FloatRange, _Mapping]] = ..., log_floats: _Optional[_Union[LogFloatRange, _Mapping]] = ..., choice: _Optional[_Union[Choice, _Mapping]] = ..., categorical: _Optional[_Union[CategoricalChoice, _Mapping]] = ...) -> None: ...

class SeedTrial(_message.Message):
    __slots__ = ("params",)
    class ParamsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    params: _containers.ScalarMap[str, float]
    def __init__(self, params: _Optional[_Mapping[str, float]] = ...) -> None: ...

class TpeSamplerParams(_message.Message):
    __slots__ = ("n_startup_trials", "n_ei_candidates", "multivariate", "group", "constant_liar", "prior_weight", "seed")
    N_STARTUP_TRIALS_FIELD_NUMBER: _ClassVar[int]
    N_EI_CANDIDATES_FIELD_NUMBER: _ClassVar[int]
    MULTIVARIATE_FIELD_NUMBER: _ClassVar[int]
    GROUP_FIELD_NUMBER: _ClassVar[int]
    CONSTANT_LIAR_FIELD_NUMBER: _ClassVar[int]
    PRIOR_WEIGHT_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    n_startup_trials: int
    n_ei_candidates: int
    multivariate: bool
    group: bool
    constant_liar: bool
    prior_weight: float
    seed: int
    def __init__(self, n_startup_trials: _Optional[int] = ..., n_ei_candidates: _Optional[int] = ..., multivariate: bool = ..., group: bool = ..., constant_liar: bool = ..., prior_weight: _Optional[float] = ..., seed: _Optional[int] = ...) -> None: ...

class CmaEsSamplerParams(_message.Message):
    __slots__ = ("n_startup_trials", "sigma0", "warn_independent_sampling", "restart_strategy_ipop", "use_separable_cma", "seed")
    N_STARTUP_TRIALS_FIELD_NUMBER: _ClassVar[int]
    SIGMA0_FIELD_NUMBER: _ClassVar[int]
    WARN_INDEPENDENT_SAMPLING_FIELD_NUMBER: _ClassVar[int]
    RESTART_STRATEGY_IPOP_FIELD_NUMBER: _ClassVar[int]
    USE_SEPARABLE_CMA_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    n_startup_trials: int
    sigma0: float
    warn_independent_sampling: bool
    restart_strategy_ipop: bool
    use_separable_cma: bool
    seed: int
    def __init__(self, n_startup_trials: _Optional[int] = ..., sigma0: _Optional[float] = ..., warn_independent_sampling: bool = ..., restart_strategy_ipop: bool = ..., use_separable_cma: bool = ..., seed: _Optional[int] = ...) -> None: ...

class RandomSamplerParams(_message.Message):
    __slots__ = ("seed",)
    SEED_FIELD_NUMBER: _ClassVar[int]
    seed: int
    def __init__(self, seed: _Optional[int] = ...) -> None: ...

class GridSamplerParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class NsgaIiSamplerParams(_message.Message):
    __slots__ = ("population_size", "mutation_prob", "crossover_prob", "seed")
    POPULATION_SIZE_FIELD_NUMBER: _ClassVar[int]
    MUTATION_PROB_FIELD_NUMBER: _ClassVar[int]
    CROSSOVER_PROB_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    population_size: int
    mutation_prob: float
    crossover_prob: float
    seed: int
    def __init__(self, population_size: _Optional[int] = ..., mutation_prob: _Optional[float] = ..., crossover_prob: _Optional[float] = ..., seed: _Optional[int] = ...) -> None: ...

class QmcSamplerParams(_message.Message):
    __slots__ = ("scramble", "seed")
    SCRAMBLE_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    scramble: bool
    seed: int
    def __init__(self, scramble: bool = ..., seed: _Optional[int] = ...) -> None: ...

class GpSamplerParams(_message.Message):
    __slots__ = ("n_startup_trials", "seed")
    N_STARTUP_TRIALS_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    n_startup_trials: int
    seed: int
    def __init__(self, n_startup_trials: _Optional[int] = ..., seed: _Optional[int] = ...) -> None: ...

class SamplerConfig(_message.Message):
    __slots__ = ("tpe", "cmaes", "random", "grid", "nsga2", "qmc", "gp")
    TPE_FIELD_NUMBER: _ClassVar[int]
    CMAES_FIELD_NUMBER: _ClassVar[int]
    RANDOM_FIELD_NUMBER: _ClassVar[int]
    GRID_FIELD_NUMBER: _ClassVar[int]
    NSGA2_FIELD_NUMBER: _ClassVar[int]
    QMC_FIELD_NUMBER: _ClassVar[int]
    GP_FIELD_NUMBER: _ClassVar[int]
    tpe: TpeSamplerParams
    cmaes: CmaEsSamplerParams
    random: RandomSamplerParams
    grid: GridSamplerParams
    nsga2: NsgaIiSamplerParams
    qmc: QmcSamplerParams
    gp: GpSamplerParams
    def __init__(self, tpe: _Optional[_Union[TpeSamplerParams, _Mapping]] = ..., cmaes: _Optional[_Union[CmaEsSamplerParams, _Mapping]] = ..., random: _Optional[_Union[RandomSamplerParams, _Mapping]] = ..., grid: _Optional[_Union[GridSamplerParams, _Mapping]] = ..., nsga2: _Optional[_Union[NsgaIiSamplerParams, _Mapping]] = ..., qmc: _Optional[_Union[QmcSamplerParams, _Mapping]] = ..., gp: _Optional[_Union[GpSamplerParams, _Mapping]] = ...) -> None: ...

class NopPrunerParams(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class MedianPrunerParams(_message.Message):
    __slots__ = ("n_startup_trials", "n_warmup_steps", "interval_steps", "n_min_trials")
    N_STARTUP_TRIALS_FIELD_NUMBER: _ClassVar[int]
    N_WARMUP_STEPS_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_STEPS_FIELD_NUMBER: _ClassVar[int]
    N_MIN_TRIALS_FIELD_NUMBER: _ClassVar[int]
    n_startup_trials: int
    n_warmup_steps: int
    interval_steps: int
    n_min_trials: int
    def __init__(self, n_startup_trials: _Optional[int] = ..., n_warmup_steps: _Optional[int] = ..., interval_steps: _Optional[int] = ..., n_min_trials: _Optional[int] = ...) -> None: ...

class PercentilePrunerParams(_message.Message):
    __slots__ = ("percentile", "n_startup_trials", "n_warmup_steps", "interval_steps", "n_min_trials")
    PERCENTILE_FIELD_NUMBER: _ClassVar[int]
    N_STARTUP_TRIALS_FIELD_NUMBER: _ClassVar[int]
    N_WARMUP_STEPS_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_STEPS_FIELD_NUMBER: _ClassVar[int]
    N_MIN_TRIALS_FIELD_NUMBER: _ClassVar[int]
    percentile: float
    n_startup_trials: int
    n_warmup_steps: int
    interval_steps: int
    n_min_trials: int
    def __init__(self, percentile: _Optional[float] = ..., n_startup_trials: _Optional[int] = ..., n_warmup_steps: _Optional[int] = ..., interval_steps: _Optional[int] = ..., n_min_trials: _Optional[int] = ...) -> None: ...

class SuccessiveHalvingPrunerParams(_message.Message):
    __slots__ = ("min_resource", "reduction_factor", "min_early_stopping_rate")
    MIN_RESOURCE_FIELD_NUMBER: _ClassVar[int]
    REDUCTION_FACTOR_FIELD_NUMBER: _ClassVar[int]
    MIN_EARLY_STOPPING_RATE_FIELD_NUMBER: _ClassVar[int]
    min_resource: float
    reduction_factor: float
    min_early_stopping_rate: int
    def __init__(self, min_resource: _Optional[float] = ..., reduction_factor: _Optional[float] = ..., min_early_stopping_rate: _Optional[int] = ...) -> None: ...

class HyperbandPrunerParams(_message.Message):
    __slots__ = ("min_resource", "max_resource", "reduction_factor")
    MIN_RESOURCE_FIELD_NUMBER: _ClassVar[int]
    MAX_RESOURCE_FIELD_NUMBER: _ClassVar[int]
    REDUCTION_FACTOR_FIELD_NUMBER: _ClassVar[int]
    min_resource: int
    max_resource: int
    reduction_factor: float
    def __init__(self, min_resource: _Optional[int] = ..., max_resource: _Optional[int] = ..., reduction_factor: _Optional[float] = ...) -> None: ...

class PatientPrunerParams(_message.Message):
    __slots__ = ("patience", "min_delta")
    PATIENCE_FIELD_NUMBER: _ClassVar[int]
    MIN_DELTA_FIELD_NUMBER: _ClassVar[int]
    patience: int
    min_delta: float
    def __init__(self, patience: _Optional[int] = ..., min_delta: _Optional[float] = ...) -> None: ...

class ThresholdPrunerParams(_message.Message):
    __slots__ = ("lower", "upper", "n_warmup_steps", "interval_steps")
    LOWER_FIELD_NUMBER: _ClassVar[int]
    UPPER_FIELD_NUMBER: _ClassVar[int]
    N_WARMUP_STEPS_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_STEPS_FIELD_NUMBER: _ClassVar[int]
    lower: float
    upper: float
    n_warmup_steps: int
    interval_steps: int
    def __init__(self, lower: _Optional[float] = ..., upper: _Optional[float] = ..., n_warmup_steps: _Optional[int] = ..., interval_steps: _Optional[int] = ...) -> None: ...

class PrunerConfig(_message.Message):
    __slots__ = ("none", "median", "percentile", "successive_halving", "hyperband", "patient", "threshold")
    NONE_FIELD_NUMBER: _ClassVar[int]
    MEDIAN_FIELD_NUMBER: _ClassVar[int]
    PERCENTILE_FIELD_NUMBER: _ClassVar[int]
    SUCCESSIVE_HALVING_FIELD_NUMBER: _ClassVar[int]
    HYPERBAND_FIELD_NUMBER: _ClassVar[int]
    PATIENT_FIELD_NUMBER: _ClassVar[int]
    THRESHOLD_FIELD_NUMBER: _ClassVar[int]
    none: NopPrunerParams
    median: MedianPrunerParams
    percentile: PercentilePrunerParams
    successive_halving: SuccessiveHalvingPrunerParams
    hyperband: HyperbandPrunerParams
    patient: PatientPrunerParams
    threshold: ThresholdPrunerParams
    def __init__(self, none: _Optional[_Union[NopPrunerParams, _Mapping]] = ..., median: _Optional[_Union[MedianPrunerParams, _Mapping]] = ..., percentile: _Optional[_Union[PercentilePrunerParams, _Mapping]] = ..., successive_halving: _Optional[_Union[SuccessiveHalvingPrunerParams, _Mapping]] = ..., hyperband: _Optional[_Union[HyperbandPrunerParams, _Mapping]] = ..., patient: _Optional[_Union[PatientPrunerParams, _Mapping]] = ..., threshold: _Optional[_Union[ThresholdPrunerParams, _Mapping]] = ...) -> None: ...

class ObjectiveMetric(_message.Message):
    __slots__ = ("metric", "maximize")
    METRIC_FIELD_NUMBER: _ClassVar[int]
    MAXIMIZE_FIELD_NUMBER: _ClassVar[int]
    metric: str
    maximize: bool
    def __init__(self, metric: _Optional[str] = ..., maximize: bool = ...) -> None: ...

class Objective(_message.Message):
    __slots__ = ("metrics", "min_trades", "max_drawdown_limit")
    METRICS_FIELD_NUMBER: _ClassVar[int]
    MIN_TRADES_FIELD_NUMBER: _ClassVar[int]
    MAX_DRAWDOWN_LIMIT_FIELD_NUMBER: _ClassVar[int]
    metrics: _containers.RepeatedCompositeFieldContainer[ObjectiveMetric]
    min_trades: int
    max_drawdown_limit: float
    def __init__(self, metrics: _Optional[_Iterable[_Union[ObjectiveMetric, _Mapping]]] = ..., min_trades: _Optional[int] = ..., max_drawdown_limit: _Optional[float] = ...) -> None: ...

class Budget(_message.Message):
    __slots__ = ("n_trials", "timeout_seconds", "n_jobs", "seed", "disable_cache", "pruning_report_interval_bars")
    N_TRIALS_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_SECONDS_FIELD_NUMBER: _ClassVar[int]
    N_JOBS_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    DISABLE_CACHE_FIELD_NUMBER: _ClassVar[int]
    PRUNING_REPORT_INTERVAL_BARS_FIELD_NUMBER: _ClassVar[int]
    n_trials: int
    timeout_seconds: int
    n_jobs: int
    seed: int
    disable_cache: bool
    pruning_report_interval_bars: int
    def __init__(self, n_trials: _Optional[int] = ..., timeout_seconds: _Optional[int] = ..., n_jobs: _Optional[int] = ..., seed: _Optional[int] = ..., disable_cache: bool = ..., pruning_report_interval_bars: _Optional[int] = ...) -> None: ...

class ClickHouseTrialSink(_message.Message):
    __slots__ = ("enabled", "database", "trials_table", "studies_table", "flush_batch_size", "flush_interval_ms")
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    DATABASE_FIELD_NUMBER: _ClassVar[int]
    TRIALS_TABLE_FIELD_NUMBER: _ClassVar[int]
    STUDIES_TABLE_FIELD_NUMBER: _ClassVar[int]
    FLUSH_BATCH_SIZE_FIELD_NUMBER: _ClassVar[int]
    FLUSH_INTERVAL_MS_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    database: str
    trials_table: str
    studies_table: str
    flush_batch_size: int
    flush_interval_ms: int
    def __init__(self, enabled: bool = ..., database: _Optional[str] = ..., trials_table: _Optional[str] = ..., studies_table: _Optional[str] = ..., flush_batch_size: _Optional[int] = ..., flush_interval_ms: _Optional[int] = ...) -> None: ...

class Storage(_message.Message):
    __slots__ = ("storage_url", "clickhouse")
    STORAGE_URL_FIELD_NUMBER: _ClassVar[int]
    CLICKHOUSE_FIELD_NUMBER: _ClassVar[int]
    storage_url: str
    clickhouse: ClickHouseTrialSink
    def __init__(self, storage_url: _Optional[str] = ..., clickhouse: _Optional[_Union[ClickHouseTrialSink, _Mapping]] = ...) -> None: ...

class StudyConfig(_message.Message):
    __slots__ = ("study_name", "sampler", "pruner", "objective", "budget", "storage", "load_if_exists", "seed_trials")
    STUDY_NAME_FIELD_NUMBER: _ClassVar[int]
    SAMPLER_FIELD_NUMBER: _ClassVar[int]
    PRUNER_FIELD_NUMBER: _ClassVar[int]
    OBJECTIVE_FIELD_NUMBER: _ClassVar[int]
    BUDGET_FIELD_NUMBER: _ClassVar[int]
    STORAGE_FIELD_NUMBER: _ClassVar[int]
    LOAD_IF_EXISTS_FIELD_NUMBER: _ClassVar[int]
    SEED_TRIALS_FIELD_NUMBER: _ClassVar[int]
    study_name: str
    sampler: SamplerConfig
    pruner: PrunerConfig
    objective: Objective
    budget: Budget
    storage: Storage
    load_if_exists: bool
    seed_trials: _containers.RepeatedCompositeFieldContainer[SeedTrial]
    def __init__(self, study_name: _Optional[str] = ..., sampler: _Optional[_Union[SamplerConfig, _Mapping]] = ..., pruner: _Optional[_Union[PrunerConfig, _Mapping]] = ..., objective: _Optional[_Union[Objective, _Mapping]] = ..., budget: _Optional[_Union[Budget, _Mapping]] = ..., storage: _Optional[_Union[Storage, _Mapping]] = ..., load_if_exists: bool = ..., seed_trials: _Optional[_Iterable[_Union[SeedTrial, _Mapping]]] = ...) -> None: ...

class TrialTask(_message.Message):
    __slots__ = ("trial_id", "search_id", "trial_number", "spec", "config", "pruning_report_interval_bars", "reply_subject")
    TRIAL_ID_FIELD_NUMBER: _ClassVar[int]
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    TRIAL_NUMBER_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    PRUNING_REPORT_INTERVAL_BARS_FIELD_NUMBER: _ClassVar[int]
    REPLY_SUBJECT_FIELD_NUMBER: _ClassVar[int]
    trial_id: str
    search_id: str
    trial_number: int
    spec: _spec_pb2.StrategySearchSpec
    config: _backtest_pb2.BacktestConfig
    pruning_report_interval_bars: int
    reply_subject: str
    def __init__(self, trial_id: _Optional[str] = ..., search_id: _Optional[str] = ..., trial_number: _Optional[int] = ..., spec: _Optional[_Union[_spec_pb2.StrategySearchSpec, _Mapping]] = ..., config: _Optional[_Union[_backtest_pb2.BacktestConfig, _Mapping]] = ..., pruning_report_interval_bars: _Optional[int] = ..., reply_subject: _Optional[str] = ...) -> None: ...

class TrialIntermediateValue(_message.Message):
    __slots__ = ("step", "value")
    STEP_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    step: int
    value: float
    def __init__(self, step: _Optional[int] = ..., value: _Optional[float] = ...) -> None: ...

class TrialResult(_message.Message):
    __slots__ = ("trial_id", "values", "state", "intermediate_values", "error", "engine_version")
    class ValuesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TRIAL_ID_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    INTERMEDIATE_VALUES_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    ENGINE_VERSION_FIELD_NUMBER: _ClassVar[int]
    trial_id: str
    values: _containers.ScalarMap[str, float]
    state: TrialState
    intermediate_values: _containers.RepeatedCompositeFieldContainer[TrialIntermediateValue]
    error: str
    engine_version: str
    def __init__(self, trial_id: _Optional[str] = ..., values: _Optional[_Mapping[str, float]] = ..., state: _Optional[_Union[TrialState, str]] = ..., intermediate_values: _Optional[_Iterable[_Union[TrialIntermediateValue, _Mapping]]] = ..., error: _Optional[str] = ..., engine_version: _Optional[str] = ...) -> None: ...

class Trial(_message.Message):
    __slots__ = ("trial_id", "number", "spec", "spec_hash", "params", "values", "state", "metrics", "is_pareto_optimal", "backtest_run_id", "created_at", "completed_at")
    class ParamsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    class ValuesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TRIAL_ID_FIELD_NUMBER: _ClassVar[int]
    NUMBER_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    SPEC_HASH_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    IS_PARETO_OPTIMAL_FIELD_NUMBER: _ClassVar[int]
    BACKTEST_RUN_ID_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    COMPLETED_AT_FIELD_NUMBER: _ClassVar[int]
    trial_id: str
    number: int
    spec: _spec_pb2.StrategySearchSpec
    spec_hash: int
    params: _containers.ScalarMap[str, float]
    values: _containers.ScalarMap[str, float]
    state: TrialState
    metrics: _backtest_pb2.BacktestMetrics
    is_pareto_optimal: bool
    backtest_run_id: str
    created_at: _timestamp_pb2.Timestamp
    completed_at: _timestamp_pb2.Timestamp
    def __init__(self, trial_id: _Optional[str] = ..., number: _Optional[int] = ..., spec: _Optional[_Union[_spec_pb2.StrategySearchSpec, _Mapping]] = ..., spec_hash: _Optional[int] = ..., params: _Optional[_Mapping[str, float]] = ..., values: _Optional[_Mapping[str, float]] = ..., state: _Optional[_Union[TrialState, str]] = ..., metrics: _Optional[_Union[_backtest_pb2.BacktestMetrics, _Mapping]] = ..., is_pareto_optimal: bool = ..., backtest_run_id: _Optional[str] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., completed_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class SearchProgress(_message.Message):
    __slots__ = ("status", "completed_trials", "pruned_trials", "failed_trials", "total_trials", "is_multi_objective", "best_values", "best_trial_id", "pareto_front_trial_ids", "error")
    class BestValuesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    STATUS_FIELD_NUMBER: _ClassVar[int]
    COMPLETED_TRIALS_FIELD_NUMBER: _ClassVar[int]
    PRUNED_TRIALS_FIELD_NUMBER: _ClassVar[int]
    FAILED_TRIALS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_TRIALS_FIELD_NUMBER: _ClassVar[int]
    IS_MULTI_OBJECTIVE_FIELD_NUMBER: _ClassVar[int]
    BEST_VALUES_FIELD_NUMBER: _ClassVar[int]
    BEST_TRIAL_ID_FIELD_NUMBER: _ClassVar[int]
    PARETO_FRONT_TRIAL_IDS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    status: _backtest_pb2.RunStatus
    completed_trials: int
    pruned_trials: int
    failed_trials: int
    total_trials: int
    is_multi_objective: bool
    best_values: _containers.ScalarMap[str, float]
    best_trial_id: str
    pareto_front_trial_ids: _containers.RepeatedScalarFieldContainer[str]
    error: str
    def __init__(self, status: _Optional[_Union[_backtest_pb2.RunStatus, str]] = ..., completed_trials: _Optional[int] = ..., pruned_trials: _Optional[int] = ..., failed_trials: _Optional[int] = ..., total_trials: _Optional[int] = ..., is_multi_objective: bool = ..., best_values: _Optional[_Mapping[str, float]] = ..., best_trial_id: _Optional[str] = ..., pareto_front_trial_ids: _Optional[_Iterable[str]] = ..., error: _Optional[str] = ...) -> None: ...

class SearchRun(_message.Message):
    __slots__ = ("search_id", "name", "base_spec", "search_space", "study", "config", "progress", "engine_version", "created_at", "started_at", "finished_at")
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    BASE_SPEC_FIELD_NUMBER: _ClassVar[int]
    SEARCH_SPACE_FIELD_NUMBER: _ClassVar[int]
    STUDY_FIELD_NUMBER: _ClassVar[int]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    ENGINE_VERSION_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    STARTED_AT_FIELD_NUMBER: _ClassVar[int]
    FINISHED_AT_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    name: str
    base_spec: _spec_pb2.StrategySearchSpec
    search_space: _containers.RepeatedCompositeFieldContainer[ParamRange]
    study: StudyConfig
    config: _backtest_pb2.BacktestConfig
    progress: SearchProgress
    engine_version: str
    created_at: _timestamp_pb2.Timestamp
    started_at: _timestamp_pb2.Timestamp
    finished_at: _timestamp_pb2.Timestamp
    def __init__(self, search_id: _Optional[str] = ..., name: _Optional[str] = ..., base_spec: _Optional[_Union[_spec_pb2.StrategySearchSpec, _Mapping]] = ..., search_space: _Optional[_Iterable[_Union[ParamRange, _Mapping]]] = ..., study: _Optional[_Union[StudyConfig, _Mapping]] = ..., config: _Optional[_Union[_backtest_pb2.BacktestConfig, _Mapping]] = ..., progress: _Optional[_Union[SearchProgress, _Mapping]] = ..., engine_version: _Optional[str] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., started_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., finished_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class SearchTask(_message.Message):
    __slots__ = ("search_id",)
    SEARCH_ID_FIELD_NUMBER: _ClassVar[int]
    search_id: str
    def __init__(self, search_id: _Optional[str] = ...) -> None: ...
