import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RealPoint(_message.Message):
    __slots__ = ("time", "value")
    TIME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    value: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., value: _Optional[float] = ...) -> None: ...

class RealSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[RealPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[RealPoint, _Mapping]]] = ...) -> None: ...

class IntegerPoint(_message.Message):
    __slots__ = ("time", "value")
    TIME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    value: int
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., value: _Optional[int] = ...) -> None: ...

class IntegerSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[IntegerPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[IntegerPoint, _Mapping]]] = ...) -> None: ...

class AroonPoint(_message.Message):
    __slots__ = ("time", "down", "up")
    TIME_FIELD_NUMBER: _ClassVar[int]
    DOWN_FIELD_NUMBER: _ClassVar[int]
    UP_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    down: float
    up: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., down: _Optional[float] = ..., up: _Optional[float] = ...) -> None: ...

class AroonSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[AroonPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[AroonPoint, _Mapping]]] = ...) -> None: ...

class BandsPoint(_message.Message):
    __slots__ = ("time", "upper", "middle", "lower")
    TIME_FIELD_NUMBER: _ClassVar[int]
    UPPER_FIELD_NUMBER: _ClassVar[int]
    MIDDLE_FIELD_NUMBER: _ClassVar[int]
    LOWER_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    upper: float
    middle: float
    lower: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., upper: _Optional[float] = ..., middle: _Optional[float] = ..., lower: _Optional[float] = ...) -> None: ...

class BandsSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[BandsPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[BandsPoint, _Mapping]]] = ...) -> None: ...

class MacdPoint(_message.Message):
    __slots__ = ("time", "macd", "signal", "hist")
    TIME_FIELD_NUMBER: _ClassVar[int]
    MACD_FIELD_NUMBER: _ClassVar[int]
    SIGNAL_FIELD_NUMBER: _ClassVar[int]
    HIST_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    macd: float
    signal: float
    hist: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., macd: _Optional[float] = ..., signal: _Optional[float] = ..., hist: _Optional[float] = ...) -> None: ...

class MacdSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[MacdPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[MacdPoint, _Mapping]]] = ...) -> None: ...

class MamaPoint(_message.Message):
    __slots__ = ("time", "mama", "fama")
    TIME_FIELD_NUMBER: _ClassVar[int]
    MAMA_FIELD_NUMBER: _ClassVar[int]
    FAMA_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    mama: float
    fama: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., mama: _Optional[float] = ..., fama: _Optional[float] = ...) -> None: ...

class MamaSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[MamaPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[MamaPoint, _Mapping]]] = ...) -> None: ...

class HtPhasorPoint(_message.Message):
    __slots__ = ("time", "in_phase", "quadrature")
    TIME_FIELD_NUMBER: _ClassVar[int]
    IN_PHASE_FIELD_NUMBER: _ClassVar[int]
    QUADRATURE_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    in_phase: float
    quadrature: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., in_phase: _Optional[float] = ..., quadrature: _Optional[float] = ...) -> None: ...

class HtPhasorSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[HtPhasorPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[HtPhasorPoint, _Mapping]]] = ...) -> None: ...

class HtSinePoint(_message.Message):
    __slots__ = ("time", "sine", "lead_sine")
    TIME_FIELD_NUMBER: _ClassVar[int]
    SINE_FIELD_NUMBER: _ClassVar[int]
    LEAD_SINE_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    sine: float
    lead_sine: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., sine: _Optional[float] = ..., lead_sine: _Optional[float] = ...) -> None: ...

class HtSineSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[HtSinePoint]
    def __init__(self, points: _Optional[_Iterable[_Union[HtSinePoint, _Mapping]]] = ...) -> None: ...

class StochPoint(_message.Message):
    __slots__ = ("time", "slow_k", "slow_d")
    TIME_FIELD_NUMBER: _ClassVar[int]
    SLOW_K_FIELD_NUMBER: _ClassVar[int]
    SLOW_D_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    slow_k: float
    slow_d: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., slow_k: _Optional[float] = ..., slow_d: _Optional[float] = ...) -> None: ...

class StochSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[StochPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[StochPoint, _Mapping]]] = ...) -> None: ...

class StochFPoint(_message.Message):
    __slots__ = ("time", "fast_k", "fast_d")
    TIME_FIELD_NUMBER: _ClassVar[int]
    FAST_K_FIELD_NUMBER: _ClassVar[int]
    FAST_D_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    fast_k: float
    fast_d: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., fast_k: _Optional[float] = ..., fast_d: _Optional[float] = ...) -> None: ...

class StochFSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[StochFPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[StochFPoint, _Mapping]]] = ...) -> None: ...

class SmiPoint(_message.Message):
    __slots__ = ("time", "smi", "signal")
    TIME_FIELD_NUMBER: _ClassVar[int]
    SMI_FIELD_NUMBER: _ClassVar[int]
    SIGNAL_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    smi: float
    signal: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., smi: _Optional[float] = ..., signal: _Optional[float] = ...) -> None: ...

class SmiSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[SmiPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[SmiPoint, _Mapping]]] = ...) -> None: ...

class MinMaxPoint(_message.Message):
    __slots__ = ("time", "min", "max")
    TIME_FIELD_NUMBER: _ClassVar[int]
    MIN_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    min: float
    max: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., min: _Optional[float] = ..., max: _Optional[float] = ...) -> None: ...

class MinMaxSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[MinMaxPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[MinMaxPoint, _Mapping]]] = ...) -> None: ...

class MinMaxIndexPoint(_message.Message):
    __slots__ = ("time", "min_index", "max_index")
    TIME_FIELD_NUMBER: _ClassVar[int]
    MIN_INDEX_FIELD_NUMBER: _ClassVar[int]
    MAX_INDEX_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    min_index: int
    max_index: int
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., min_index: _Optional[int] = ..., max_index: _Optional[int] = ...) -> None: ...

class MinMaxIndexSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[MinMaxIndexPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[MinMaxIndexPoint, _Mapping]]] = ...) -> None: ...

class SuperTrendPoint(_message.Message):
    __slots__ = ("time", "value", "trend")
    TIME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    TREND_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    value: float
    trend: int
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., value: _Optional[float] = ..., trend: _Optional[int] = ...) -> None: ...

class SuperTrendSeries(_message.Message):
    __slots__ = ("points",)
    POINTS_FIELD_NUMBER: _ClassVar[int]
    points: _containers.RepeatedCompositeFieldContainer[SuperTrendPoint]
    def __init__(self, points: _Optional[_Iterable[_Union[SuperTrendPoint, _Mapping]]] = ...) -> None: ...

class IndicatorValuesResponse(_message.Message):
    __slots__ = ("rsi", "ht_dcperiod", "ht_dcphase", "ht_phasor", "ht_sine", "ht_trendmode", "add", "div", "max", "maxindex", "min", "minindex", "minmax", "minmaxindex", "mult", "sub", "sum", "acos", "asin", "atan", "ceil", "cos", "cosh", "exp", "floor", "ln", "log10", "sin", "sinh", "sqrt", "tan", "tanh", "ac", "adx", "adxr", "ao", "apo", "aroon", "aroonosc", "bop", "cci", "cmo", "cmou", "dx", "imi", "macd", "macdext", "macdfix", "mfi", "minus_di", "minus_dm", "mom", "plus_di", "plus_dm", "ppo", "qstick", "roc", "rocp", "rocr", "rocr100", "smi", "stoch", "stochf", "stochrsi", "trix", "ultosc", "wad", "willr", "accbands", "bbands", "dema", "ema", "hma", "ht_trendline", "kama", "kc", "ma", "mama", "mavp", "midpoint", "midprice", "sar", "sarext", "sma", "supertrend", "t3", "tema", "trima", "vwma", "wma", "cdl2crows", "cdl3blackcrows", "cdl3inside", "cdl3linestrike", "cdl3outside", "cdl3starsinsouth", "cdl3whitesoldiers", "cdlabandonedbaby", "cdladvanceblock", "cdlbelthold", "cdlbreakaway", "cdlclosingmarubozu", "cdlconcealbabyswall", "cdlcounterattack", "cdldarkcloudcover", "cdldoji", "cdldojistar", "cdldragonflydoji", "cdlengulfing", "cdleveningdojistar", "cdleveningstar", "cdlgapsidesidewhite", "cdlgravestonedoji", "cdlhammer", "cdlhangingman", "cdlharami", "cdlharamicross", "cdlhighwave", "cdlhikkake", "cdlhikkakemod", "cdlhomingpigeon", "cdlidentical3crows", "cdlinneck", "cdlinvertedhammer", "cdlkicking", "cdlkickingbylength", "cdlladderbottom", "cdllongleggeddoji", "cdllongline", "cdlmarubozu", "cdlmatchinglow", "cdlmathold", "cdlmorningdojistar", "cdlmorningstar", "cdlonneck", "cdlpiercing", "cdlrickshawman", "cdlrisefall3methods", "cdlseparatinglines", "cdlshootingstar", "cdlshortline", "cdlspinningtop", "cdlstalledpattern", "cdlsticksandwich", "cdltakuri", "cdltasukigap", "cdlthrusting", "cdltristar", "cdlunique3river", "cdlupsidegap2crows", "cdlxsidegap3methods", "avgdev", "avgprice", "medprice", "typprice", "wclprice", "beta", "correl", "linearreg", "linearreg_angle", "linearreg_intercept", "linearreg_slope", "stddev", "tsf", "var", "atr", "natr", "trange", "ad", "adosc", "cmf", "efi", "marketfi", "nvi", "obv", "pvi", "pvo", "vwap")
    RSI_FIELD_NUMBER: _ClassVar[int]
    HT_DCPERIOD_FIELD_NUMBER: _ClassVar[int]
    HT_DCPHASE_FIELD_NUMBER: _ClassVar[int]
    HT_PHASOR_FIELD_NUMBER: _ClassVar[int]
    HT_SINE_FIELD_NUMBER: _ClassVar[int]
    HT_TRENDMODE_FIELD_NUMBER: _ClassVar[int]
    ADD_FIELD_NUMBER: _ClassVar[int]
    DIV_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    MAXINDEX_FIELD_NUMBER: _ClassVar[int]
    MIN_FIELD_NUMBER: _ClassVar[int]
    MININDEX_FIELD_NUMBER: _ClassVar[int]
    MINMAX_FIELD_NUMBER: _ClassVar[int]
    MINMAXINDEX_FIELD_NUMBER: _ClassVar[int]
    MULT_FIELD_NUMBER: _ClassVar[int]
    SUB_FIELD_NUMBER: _ClassVar[int]
    SUM_FIELD_NUMBER: _ClassVar[int]
    ACOS_FIELD_NUMBER: _ClassVar[int]
    ASIN_FIELD_NUMBER: _ClassVar[int]
    ATAN_FIELD_NUMBER: _ClassVar[int]
    CEIL_FIELD_NUMBER: _ClassVar[int]
    COS_FIELD_NUMBER: _ClassVar[int]
    COSH_FIELD_NUMBER: _ClassVar[int]
    EXP_FIELD_NUMBER: _ClassVar[int]
    FLOOR_FIELD_NUMBER: _ClassVar[int]
    LN_FIELD_NUMBER: _ClassVar[int]
    LOG10_FIELD_NUMBER: _ClassVar[int]
    SIN_FIELD_NUMBER: _ClassVar[int]
    SINH_FIELD_NUMBER: _ClassVar[int]
    SQRT_FIELD_NUMBER: _ClassVar[int]
    TAN_FIELD_NUMBER: _ClassVar[int]
    TANH_FIELD_NUMBER: _ClassVar[int]
    AC_FIELD_NUMBER: _ClassVar[int]
    ADX_FIELD_NUMBER: _ClassVar[int]
    ADXR_FIELD_NUMBER: _ClassVar[int]
    AO_FIELD_NUMBER: _ClassVar[int]
    APO_FIELD_NUMBER: _ClassVar[int]
    AROON_FIELD_NUMBER: _ClassVar[int]
    AROONOSC_FIELD_NUMBER: _ClassVar[int]
    BOP_FIELD_NUMBER: _ClassVar[int]
    CCI_FIELD_NUMBER: _ClassVar[int]
    CMO_FIELD_NUMBER: _ClassVar[int]
    CMOU_FIELD_NUMBER: _ClassVar[int]
    DX_FIELD_NUMBER: _ClassVar[int]
    IMI_FIELD_NUMBER: _ClassVar[int]
    MACD_FIELD_NUMBER: _ClassVar[int]
    MACDEXT_FIELD_NUMBER: _ClassVar[int]
    MACDFIX_FIELD_NUMBER: _ClassVar[int]
    MFI_FIELD_NUMBER: _ClassVar[int]
    MINUS_DI_FIELD_NUMBER: _ClassVar[int]
    MINUS_DM_FIELD_NUMBER: _ClassVar[int]
    MOM_FIELD_NUMBER: _ClassVar[int]
    PLUS_DI_FIELD_NUMBER: _ClassVar[int]
    PLUS_DM_FIELD_NUMBER: _ClassVar[int]
    PPO_FIELD_NUMBER: _ClassVar[int]
    QSTICK_FIELD_NUMBER: _ClassVar[int]
    ROC_FIELD_NUMBER: _ClassVar[int]
    ROCP_FIELD_NUMBER: _ClassVar[int]
    ROCR_FIELD_NUMBER: _ClassVar[int]
    ROCR100_FIELD_NUMBER: _ClassVar[int]
    SMI_FIELD_NUMBER: _ClassVar[int]
    STOCH_FIELD_NUMBER: _ClassVar[int]
    STOCHF_FIELD_NUMBER: _ClassVar[int]
    STOCHRSI_FIELD_NUMBER: _ClassVar[int]
    TRIX_FIELD_NUMBER: _ClassVar[int]
    ULTOSC_FIELD_NUMBER: _ClassVar[int]
    WAD_FIELD_NUMBER: _ClassVar[int]
    WILLR_FIELD_NUMBER: _ClassVar[int]
    ACCBANDS_FIELD_NUMBER: _ClassVar[int]
    BBANDS_FIELD_NUMBER: _ClassVar[int]
    DEMA_FIELD_NUMBER: _ClassVar[int]
    EMA_FIELD_NUMBER: _ClassVar[int]
    HMA_FIELD_NUMBER: _ClassVar[int]
    HT_TRENDLINE_FIELD_NUMBER: _ClassVar[int]
    KAMA_FIELD_NUMBER: _ClassVar[int]
    KC_FIELD_NUMBER: _ClassVar[int]
    MA_FIELD_NUMBER: _ClassVar[int]
    MAMA_FIELD_NUMBER: _ClassVar[int]
    MAVP_FIELD_NUMBER: _ClassVar[int]
    MIDPOINT_FIELD_NUMBER: _ClassVar[int]
    MIDPRICE_FIELD_NUMBER: _ClassVar[int]
    SAR_FIELD_NUMBER: _ClassVar[int]
    SAREXT_FIELD_NUMBER: _ClassVar[int]
    SMA_FIELD_NUMBER: _ClassVar[int]
    SUPERTREND_FIELD_NUMBER: _ClassVar[int]
    T3_FIELD_NUMBER: _ClassVar[int]
    TEMA_FIELD_NUMBER: _ClassVar[int]
    TRIMA_FIELD_NUMBER: _ClassVar[int]
    VWMA_FIELD_NUMBER: _ClassVar[int]
    WMA_FIELD_NUMBER: _ClassVar[int]
    CDL2CROWS_FIELD_NUMBER: _ClassVar[int]
    CDL3BLACKCROWS_FIELD_NUMBER: _ClassVar[int]
    CDL3INSIDE_FIELD_NUMBER: _ClassVar[int]
    CDL3LINESTRIKE_FIELD_NUMBER: _ClassVar[int]
    CDL3OUTSIDE_FIELD_NUMBER: _ClassVar[int]
    CDL3STARSINSOUTH_FIELD_NUMBER: _ClassVar[int]
    CDL3WHITESOLDIERS_FIELD_NUMBER: _ClassVar[int]
    CDLABANDONEDBABY_FIELD_NUMBER: _ClassVar[int]
    CDLADVANCEBLOCK_FIELD_NUMBER: _ClassVar[int]
    CDLBELTHOLD_FIELD_NUMBER: _ClassVar[int]
    CDLBREAKAWAY_FIELD_NUMBER: _ClassVar[int]
    CDLCLOSINGMARUBOZU_FIELD_NUMBER: _ClassVar[int]
    CDLCONCEALBABYSWALL_FIELD_NUMBER: _ClassVar[int]
    CDLCOUNTERATTACK_FIELD_NUMBER: _ClassVar[int]
    CDLDARKCLOUDCOVER_FIELD_NUMBER: _ClassVar[int]
    CDLDOJI_FIELD_NUMBER: _ClassVar[int]
    CDLDOJISTAR_FIELD_NUMBER: _ClassVar[int]
    CDLDRAGONFLYDOJI_FIELD_NUMBER: _ClassVar[int]
    CDLENGULFING_FIELD_NUMBER: _ClassVar[int]
    CDLEVENINGDOJISTAR_FIELD_NUMBER: _ClassVar[int]
    CDLEVENINGSTAR_FIELD_NUMBER: _ClassVar[int]
    CDLGAPSIDESIDEWHITE_FIELD_NUMBER: _ClassVar[int]
    CDLGRAVESTONEDOJI_FIELD_NUMBER: _ClassVar[int]
    CDLHAMMER_FIELD_NUMBER: _ClassVar[int]
    CDLHANGINGMAN_FIELD_NUMBER: _ClassVar[int]
    CDLHARAMI_FIELD_NUMBER: _ClassVar[int]
    CDLHARAMICROSS_FIELD_NUMBER: _ClassVar[int]
    CDLHIGHWAVE_FIELD_NUMBER: _ClassVar[int]
    CDLHIKKAKE_FIELD_NUMBER: _ClassVar[int]
    CDLHIKKAKEMOD_FIELD_NUMBER: _ClassVar[int]
    CDLHOMINGPIGEON_FIELD_NUMBER: _ClassVar[int]
    CDLIDENTICAL3CROWS_FIELD_NUMBER: _ClassVar[int]
    CDLINNECK_FIELD_NUMBER: _ClassVar[int]
    CDLINVERTEDHAMMER_FIELD_NUMBER: _ClassVar[int]
    CDLKICKING_FIELD_NUMBER: _ClassVar[int]
    CDLKICKINGBYLENGTH_FIELD_NUMBER: _ClassVar[int]
    CDLLADDERBOTTOM_FIELD_NUMBER: _ClassVar[int]
    CDLLONGLEGGEDDOJI_FIELD_NUMBER: _ClassVar[int]
    CDLLONGLINE_FIELD_NUMBER: _ClassVar[int]
    CDLMARUBOZU_FIELD_NUMBER: _ClassVar[int]
    CDLMATCHINGLOW_FIELD_NUMBER: _ClassVar[int]
    CDLMATHOLD_FIELD_NUMBER: _ClassVar[int]
    CDLMORNINGDOJISTAR_FIELD_NUMBER: _ClassVar[int]
    CDLMORNINGSTAR_FIELD_NUMBER: _ClassVar[int]
    CDLONNECK_FIELD_NUMBER: _ClassVar[int]
    CDLPIERCING_FIELD_NUMBER: _ClassVar[int]
    CDLRICKSHAWMAN_FIELD_NUMBER: _ClassVar[int]
    CDLRISEFALL3METHODS_FIELD_NUMBER: _ClassVar[int]
    CDLSEPARATINGLINES_FIELD_NUMBER: _ClassVar[int]
    CDLSHOOTINGSTAR_FIELD_NUMBER: _ClassVar[int]
    CDLSHORTLINE_FIELD_NUMBER: _ClassVar[int]
    CDLSPINNINGTOP_FIELD_NUMBER: _ClassVar[int]
    CDLSTALLEDPATTERN_FIELD_NUMBER: _ClassVar[int]
    CDLSTICKSANDWICH_FIELD_NUMBER: _ClassVar[int]
    CDLTAKURI_FIELD_NUMBER: _ClassVar[int]
    CDLTASUKIGAP_FIELD_NUMBER: _ClassVar[int]
    CDLTHRUSTING_FIELD_NUMBER: _ClassVar[int]
    CDLTRISTAR_FIELD_NUMBER: _ClassVar[int]
    CDLUNIQUE3RIVER_FIELD_NUMBER: _ClassVar[int]
    CDLUPSIDEGAP2CROWS_FIELD_NUMBER: _ClassVar[int]
    CDLXSIDEGAP3METHODS_FIELD_NUMBER: _ClassVar[int]
    AVGDEV_FIELD_NUMBER: _ClassVar[int]
    AVGPRICE_FIELD_NUMBER: _ClassVar[int]
    MEDPRICE_FIELD_NUMBER: _ClassVar[int]
    TYPPRICE_FIELD_NUMBER: _ClassVar[int]
    WCLPRICE_FIELD_NUMBER: _ClassVar[int]
    BETA_FIELD_NUMBER: _ClassVar[int]
    CORREL_FIELD_NUMBER: _ClassVar[int]
    LINEARREG_FIELD_NUMBER: _ClassVar[int]
    LINEARREG_ANGLE_FIELD_NUMBER: _ClassVar[int]
    LINEARREG_INTERCEPT_FIELD_NUMBER: _ClassVar[int]
    LINEARREG_SLOPE_FIELD_NUMBER: _ClassVar[int]
    STDDEV_FIELD_NUMBER: _ClassVar[int]
    TSF_FIELD_NUMBER: _ClassVar[int]
    VAR_FIELD_NUMBER: _ClassVar[int]
    ATR_FIELD_NUMBER: _ClassVar[int]
    NATR_FIELD_NUMBER: _ClassVar[int]
    TRANGE_FIELD_NUMBER: _ClassVar[int]
    AD_FIELD_NUMBER: _ClassVar[int]
    ADOSC_FIELD_NUMBER: _ClassVar[int]
    CMF_FIELD_NUMBER: _ClassVar[int]
    EFI_FIELD_NUMBER: _ClassVar[int]
    MARKETFI_FIELD_NUMBER: _ClassVar[int]
    NVI_FIELD_NUMBER: _ClassVar[int]
    OBV_FIELD_NUMBER: _ClassVar[int]
    PVI_FIELD_NUMBER: _ClassVar[int]
    PVO_FIELD_NUMBER: _ClassVar[int]
    VWAP_FIELD_NUMBER: _ClassVar[int]
    rsi: RealSeries
    ht_dcperiod: RealSeries
    ht_dcphase: RealSeries
    ht_phasor: HtPhasorSeries
    ht_sine: HtSineSeries
    ht_trendmode: IntegerSeries
    add: RealSeries
    div: RealSeries
    max: RealSeries
    maxindex: IntegerSeries
    min: RealSeries
    minindex: IntegerSeries
    minmax: MinMaxSeries
    minmaxindex: MinMaxIndexSeries
    mult: RealSeries
    sub: RealSeries
    sum: RealSeries
    acos: RealSeries
    asin: RealSeries
    atan: RealSeries
    ceil: RealSeries
    cos: RealSeries
    cosh: RealSeries
    exp: RealSeries
    floor: RealSeries
    ln: RealSeries
    log10: RealSeries
    sin: RealSeries
    sinh: RealSeries
    sqrt: RealSeries
    tan: RealSeries
    tanh: RealSeries
    ac: RealSeries
    adx: RealSeries
    adxr: RealSeries
    ao: RealSeries
    apo: RealSeries
    aroon: AroonSeries
    aroonosc: RealSeries
    bop: RealSeries
    cci: RealSeries
    cmo: RealSeries
    cmou: RealSeries
    dx: RealSeries
    imi: RealSeries
    macd: MacdSeries
    macdext: MacdSeries
    macdfix: MacdSeries
    mfi: RealSeries
    minus_di: RealSeries
    minus_dm: RealSeries
    mom: RealSeries
    plus_di: RealSeries
    plus_dm: RealSeries
    ppo: RealSeries
    qstick: RealSeries
    roc: RealSeries
    rocp: RealSeries
    rocr: RealSeries
    rocr100: RealSeries
    smi: SmiSeries
    stoch: StochSeries
    stochf: StochFSeries
    stochrsi: StochFSeries
    trix: RealSeries
    ultosc: RealSeries
    wad: RealSeries
    willr: RealSeries
    accbands: BandsSeries
    bbands: BandsSeries
    dema: RealSeries
    ema: RealSeries
    hma: RealSeries
    ht_trendline: RealSeries
    kama: RealSeries
    kc: BandsSeries
    ma: RealSeries
    mama: MamaSeries
    mavp: RealSeries
    midpoint: RealSeries
    midprice: RealSeries
    sar: RealSeries
    sarext: RealSeries
    sma: RealSeries
    supertrend: SuperTrendSeries
    t3: RealSeries
    tema: RealSeries
    trima: RealSeries
    vwma: RealSeries
    wma: RealSeries
    cdl2crows: IntegerSeries
    cdl3blackcrows: IntegerSeries
    cdl3inside: IntegerSeries
    cdl3linestrike: IntegerSeries
    cdl3outside: IntegerSeries
    cdl3starsinsouth: IntegerSeries
    cdl3whitesoldiers: IntegerSeries
    cdlabandonedbaby: IntegerSeries
    cdladvanceblock: IntegerSeries
    cdlbelthold: IntegerSeries
    cdlbreakaway: IntegerSeries
    cdlclosingmarubozu: IntegerSeries
    cdlconcealbabyswall: IntegerSeries
    cdlcounterattack: IntegerSeries
    cdldarkcloudcover: IntegerSeries
    cdldoji: IntegerSeries
    cdldojistar: IntegerSeries
    cdldragonflydoji: IntegerSeries
    cdlengulfing: IntegerSeries
    cdleveningdojistar: IntegerSeries
    cdleveningstar: IntegerSeries
    cdlgapsidesidewhite: IntegerSeries
    cdlgravestonedoji: IntegerSeries
    cdlhammer: IntegerSeries
    cdlhangingman: IntegerSeries
    cdlharami: IntegerSeries
    cdlharamicross: IntegerSeries
    cdlhighwave: IntegerSeries
    cdlhikkake: IntegerSeries
    cdlhikkakemod: IntegerSeries
    cdlhomingpigeon: IntegerSeries
    cdlidentical3crows: IntegerSeries
    cdlinneck: IntegerSeries
    cdlinvertedhammer: IntegerSeries
    cdlkicking: IntegerSeries
    cdlkickingbylength: IntegerSeries
    cdlladderbottom: IntegerSeries
    cdllongleggeddoji: IntegerSeries
    cdllongline: IntegerSeries
    cdlmarubozu: IntegerSeries
    cdlmatchinglow: IntegerSeries
    cdlmathold: IntegerSeries
    cdlmorningdojistar: IntegerSeries
    cdlmorningstar: IntegerSeries
    cdlonneck: IntegerSeries
    cdlpiercing: IntegerSeries
    cdlrickshawman: IntegerSeries
    cdlrisefall3methods: IntegerSeries
    cdlseparatinglines: IntegerSeries
    cdlshootingstar: IntegerSeries
    cdlshortline: IntegerSeries
    cdlspinningtop: IntegerSeries
    cdlstalledpattern: IntegerSeries
    cdlsticksandwich: IntegerSeries
    cdltakuri: IntegerSeries
    cdltasukigap: IntegerSeries
    cdlthrusting: IntegerSeries
    cdltristar: IntegerSeries
    cdlunique3river: IntegerSeries
    cdlupsidegap2crows: IntegerSeries
    cdlxsidegap3methods: IntegerSeries
    avgdev: RealSeries
    avgprice: RealSeries
    medprice: RealSeries
    typprice: RealSeries
    wclprice: RealSeries
    beta: RealSeries
    correl: RealSeries
    linearreg: RealSeries
    linearreg_angle: RealSeries
    linearreg_intercept: RealSeries
    linearreg_slope: RealSeries
    stddev: RealSeries
    tsf: RealSeries
    var: RealSeries
    atr: RealSeries
    natr: RealSeries
    trange: RealSeries
    ad: RealSeries
    adosc: RealSeries
    cmf: RealSeries
    efi: RealSeries
    marketfi: RealSeries
    nvi: RealSeries
    obv: RealSeries
    pvi: RealSeries
    pvo: RealSeries
    vwap: RealSeries
    def __init__(self, rsi: _Optional[_Union[RealSeries, _Mapping]] = ..., ht_dcperiod: _Optional[_Union[RealSeries, _Mapping]] = ..., ht_dcphase: _Optional[_Union[RealSeries, _Mapping]] = ..., ht_phasor: _Optional[_Union[HtPhasorSeries, _Mapping]] = ..., ht_sine: _Optional[_Union[HtSineSeries, _Mapping]] = ..., ht_trendmode: _Optional[_Union[IntegerSeries, _Mapping]] = ..., add: _Optional[_Union[RealSeries, _Mapping]] = ..., div: _Optional[_Union[RealSeries, _Mapping]] = ..., max: _Optional[_Union[RealSeries, _Mapping]] = ..., maxindex: _Optional[_Union[IntegerSeries, _Mapping]] = ..., min: _Optional[_Union[RealSeries, _Mapping]] = ..., minindex: _Optional[_Union[IntegerSeries, _Mapping]] = ..., minmax: _Optional[_Union[MinMaxSeries, _Mapping]] = ..., minmaxindex: _Optional[_Union[MinMaxIndexSeries, _Mapping]] = ..., mult: _Optional[_Union[RealSeries, _Mapping]] = ..., sub: _Optional[_Union[RealSeries, _Mapping]] = ..., sum: _Optional[_Union[RealSeries, _Mapping]] = ..., acos: _Optional[_Union[RealSeries, _Mapping]] = ..., asin: _Optional[_Union[RealSeries, _Mapping]] = ..., atan: _Optional[_Union[RealSeries, _Mapping]] = ..., ceil: _Optional[_Union[RealSeries, _Mapping]] = ..., cos: _Optional[_Union[RealSeries, _Mapping]] = ..., cosh: _Optional[_Union[RealSeries, _Mapping]] = ..., exp: _Optional[_Union[RealSeries, _Mapping]] = ..., floor: _Optional[_Union[RealSeries, _Mapping]] = ..., ln: _Optional[_Union[RealSeries, _Mapping]] = ..., log10: _Optional[_Union[RealSeries, _Mapping]] = ..., sin: _Optional[_Union[RealSeries, _Mapping]] = ..., sinh: _Optional[_Union[RealSeries, _Mapping]] = ..., sqrt: _Optional[_Union[RealSeries, _Mapping]] = ..., tan: _Optional[_Union[RealSeries, _Mapping]] = ..., tanh: _Optional[_Union[RealSeries, _Mapping]] = ..., ac: _Optional[_Union[RealSeries, _Mapping]] = ..., adx: _Optional[_Union[RealSeries, _Mapping]] = ..., adxr: _Optional[_Union[RealSeries, _Mapping]] = ..., ao: _Optional[_Union[RealSeries, _Mapping]] = ..., apo: _Optional[_Union[RealSeries, _Mapping]] = ..., aroon: _Optional[_Union[AroonSeries, _Mapping]] = ..., aroonosc: _Optional[_Union[RealSeries, _Mapping]] = ..., bop: _Optional[_Union[RealSeries, _Mapping]] = ..., cci: _Optional[_Union[RealSeries, _Mapping]] = ..., cmo: _Optional[_Union[RealSeries, _Mapping]] = ..., cmou: _Optional[_Union[RealSeries, _Mapping]] = ..., dx: _Optional[_Union[RealSeries, _Mapping]] = ..., imi: _Optional[_Union[RealSeries, _Mapping]] = ..., macd: _Optional[_Union[MacdSeries, _Mapping]] = ..., macdext: _Optional[_Union[MacdSeries, _Mapping]] = ..., macdfix: _Optional[_Union[MacdSeries, _Mapping]] = ..., mfi: _Optional[_Union[RealSeries, _Mapping]] = ..., minus_di: _Optional[_Union[RealSeries, _Mapping]] = ..., minus_dm: _Optional[_Union[RealSeries, _Mapping]] = ..., mom: _Optional[_Union[RealSeries, _Mapping]] = ..., plus_di: _Optional[_Union[RealSeries, _Mapping]] = ..., plus_dm: _Optional[_Union[RealSeries, _Mapping]] = ..., ppo: _Optional[_Union[RealSeries, _Mapping]] = ..., qstick: _Optional[_Union[RealSeries, _Mapping]] = ..., roc: _Optional[_Union[RealSeries, _Mapping]] = ..., rocp: _Optional[_Union[RealSeries, _Mapping]] = ..., rocr: _Optional[_Union[RealSeries, _Mapping]] = ..., rocr100: _Optional[_Union[RealSeries, _Mapping]] = ..., smi: _Optional[_Union[SmiSeries, _Mapping]] = ..., stoch: _Optional[_Union[StochSeries, _Mapping]] = ..., stochf: _Optional[_Union[StochFSeries, _Mapping]] = ..., stochrsi: _Optional[_Union[StochFSeries, _Mapping]] = ..., trix: _Optional[_Union[RealSeries, _Mapping]] = ..., ultosc: _Optional[_Union[RealSeries, _Mapping]] = ..., wad: _Optional[_Union[RealSeries, _Mapping]] = ..., willr: _Optional[_Union[RealSeries, _Mapping]] = ..., accbands: _Optional[_Union[BandsSeries, _Mapping]] = ..., bbands: _Optional[_Union[BandsSeries, _Mapping]] = ..., dema: _Optional[_Union[RealSeries, _Mapping]] = ..., ema: _Optional[_Union[RealSeries, _Mapping]] = ..., hma: _Optional[_Union[RealSeries, _Mapping]] = ..., ht_trendline: _Optional[_Union[RealSeries, _Mapping]] = ..., kama: _Optional[_Union[RealSeries, _Mapping]] = ..., kc: _Optional[_Union[BandsSeries, _Mapping]] = ..., ma: _Optional[_Union[RealSeries, _Mapping]] = ..., mama: _Optional[_Union[MamaSeries, _Mapping]] = ..., mavp: _Optional[_Union[RealSeries, _Mapping]] = ..., midpoint: _Optional[_Union[RealSeries, _Mapping]] = ..., midprice: _Optional[_Union[RealSeries, _Mapping]] = ..., sar: _Optional[_Union[RealSeries, _Mapping]] = ..., sarext: _Optional[_Union[RealSeries, _Mapping]] = ..., sma: _Optional[_Union[RealSeries, _Mapping]] = ..., supertrend: _Optional[_Union[SuperTrendSeries, _Mapping]] = ..., t3: _Optional[_Union[RealSeries, _Mapping]] = ..., tema: _Optional[_Union[RealSeries, _Mapping]] = ..., trima: _Optional[_Union[RealSeries, _Mapping]] = ..., vwma: _Optional[_Union[RealSeries, _Mapping]] = ..., wma: _Optional[_Union[RealSeries, _Mapping]] = ..., cdl2crows: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdl3blackcrows: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdl3inside: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdl3linestrike: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdl3outside: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdl3starsinsouth: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdl3whitesoldiers: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlabandonedbaby: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdladvanceblock: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlbelthold: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlbreakaway: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlclosingmarubozu: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlconcealbabyswall: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlcounterattack: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdldarkcloudcover: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdldoji: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdldojistar: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdldragonflydoji: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlengulfing: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdleveningdojistar: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdleveningstar: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlgapsidesidewhite: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlgravestonedoji: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlhammer: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlhangingman: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlharami: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlharamicross: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlhighwave: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlhikkake: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlhikkakemod: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlhomingpigeon: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlidentical3crows: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlinneck: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlinvertedhammer: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlkicking: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlkickingbylength: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlladderbottom: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdllongleggeddoji: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdllongline: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlmarubozu: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlmatchinglow: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlmathold: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlmorningdojistar: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlmorningstar: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlonneck: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlpiercing: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlrickshawman: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlrisefall3methods: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlseparatinglines: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlshootingstar: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlshortline: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlspinningtop: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlstalledpattern: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlsticksandwich: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdltakuri: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdltasukigap: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlthrusting: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdltristar: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlunique3river: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlupsidegap2crows: _Optional[_Union[IntegerSeries, _Mapping]] = ..., cdlxsidegap3methods: _Optional[_Union[IntegerSeries, _Mapping]] = ..., avgdev: _Optional[_Union[RealSeries, _Mapping]] = ..., avgprice: _Optional[_Union[RealSeries, _Mapping]] = ..., medprice: _Optional[_Union[RealSeries, _Mapping]] = ..., typprice: _Optional[_Union[RealSeries, _Mapping]] = ..., wclprice: _Optional[_Union[RealSeries, _Mapping]] = ..., beta: _Optional[_Union[RealSeries, _Mapping]] = ..., correl: _Optional[_Union[RealSeries, _Mapping]] = ..., linearreg: _Optional[_Union[RealSeries, _Mapping]] = ..., linearreg_angle: _Optional[_Union[RealSeries, _Mapping]] = ..., linearreg_intercept: _Optional[_Union[RealSeries, _Mapping]] = ..., linearreg_slope: _Optional[_Union[RealSeries, _Mapping]] = ..., stddev: _Optional[_Union[RealSeries, _Mapping]] = ..., tsf: _Optional[_Union[RealSeries, _Mapping]] = ..., var: _Optional[_Union[RealSeries, _Mapping]] = ..., atr: _Optional[_Union[RealSeries, _Mapping]] = ..., natr: _Optional[_Union[RealSeries, _Mapping]] = ..., trange: _Optional[_Union[RealSeries, _Mapping]] = ..., ad: _Optional[_Union[RealSeries, _Mapping]] = ..., adosc: _Optional[_Union[RealSeries, _Mapping]] = ..., cmf: _Optional[_Union[RealSeries, _Mapping]] = ..., efi: _Optional[_Union[RealSeries, _Mapping]] = ..., marketfi: _Optional[_Union[RealSeries, _Mapping]] = ..., nvi: _Optional[_Union[RealSeries, _Mapping]] = ..., obv: _Optional[_Union[RealSeries, _Mapping]] = ..., pvi: _Optional[_Union[RealSeries, _Mapping]] = ..., pvo: _Optional[_Union[RealSeries, _Mapping]] = ..., vwap: _Optional[_Union[RealSeries, _Mapping]] = ...) -> None: ...
