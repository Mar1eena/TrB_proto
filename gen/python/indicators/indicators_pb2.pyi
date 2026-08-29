import datetime

from google.api import annotations_pb2 as _annotations_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class IndicatorType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    INDICATOR_TYPE_UNSPECIFIED: _ClassVar[IndicatorType]
    INDICATOR_TYPE_RSI: _ClassVar[IndicatorType]
    INDICATOR_TYPE_SMA: _ClassVar[IndicatorType]
    INDICATOR_TYPE_EMA: _ClassVar[IndicatorType]
    INDICATOR_TYPE_MACD: _ClassVar[IndicatorType]
    INDICATOR_TYPE_BB: _ClassVar[IndicatorType]
INDICATOR_TYPE_UNSPECIFIED: IndicatorType
INDICATOR_TYPE_RSI: IndicatorType
INDICATOR_TYPE_SMA: IndicatorType
INDICATOR_TYPE_EMA: IndicatorType
INDICATOR_TYPE_MACD: IndicatorType
INDICATOR_TYPE_BB: IndicatorType

class Candle(_message.Message):
    __slots__ = ("time", "open", "high", "low", "close", "volume")
    TIME_FIELD_NUMBER: _ClassVar[int]
    OPEN_FIELD_NUMBER: _ClassVar[int]
    HIGH_FIELD_NUMBER: _ClassVar[int]
    LOW_FIELD_NUMBER: _ClassVar[int]
    CLOSE_FIELD_NUMBER: _ClassVar[int]
    VOLUME_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    open: float
    high: float
    low: float
    close: float
    volume: float
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., open: _Optional[float] = ..., high: _Optional[float] = ..., low: _Optional[float] = ..., close: _Optional[float] = ..., volume: _Optional[float] = ...) -> None: ...

class ComputeRequest(_message.Message):
    __slots__ = ("type", "candles", "params")
    class ParamsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    CANDLES_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    type: IndicatorType
    candles: _containers.RepeatedCompositeFieldContainer[Candle]
    params: _containers.ScalarMap[str, float]
    def __init__(self, type: _Optional[_Union[IndicatorType, str]] = ..., candles: _Optional[_Iterable[_Union[Candle, _Mapping]]] = ..., params: _Optional[_Mapping[str, float]] = ...) -> None: ...

class ComputeForInstrumentRequest(_message.Message):
    __slots__ = ("uid", "interval", "to", "type", "params", "persist")
    class ParamsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    UID_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    PERSIST_FIELD_NUMBER: _ClassVar[int]
    uid: str
    interval: int
    to: _timestamp_pb2.Timestamp
    type: IndicatorType
    params: _containers.ScalarMap[str, float]
    persist: bool
    def __init__(self, uid: _Optional[str] = ..., interval: _Optional[int] = ..., to: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., type: _Optional[_Union[IndicatorType, str]] = ..., params: _Optional[_Mapping[str, float]] = ..., persist: bool = ..., **kwargs) -> None: ...

class IndicatorPoint(_message.Message):
    __slots__ = ("time", "values")
    class ValuesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TIME_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    time: _timestamp_pb2.Timestamp
    values: _containers.ScalarMap[str, float]
    def __init__(self, time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., values: _Optional[_Mapping[str, float]] = ...) -> None: ...

class ComputeResponse(_message.Message):
    __slots__ = ("type", "params", "points")
    class ParamsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    PARAMS_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    type: IndicatorType
    params: _containers.ScalarMap[str, float]
    points: _containers.RepeatedCompositeFieldContainer[IndicatorPoint]
    def __init__(self, type: _Optional[_Union[IndicatorType, str]] = ..., params: _Optional[_Mapping[str, float]] = ..., points: _Optional[_Iterable[_Union[IndicatorPoint, _Mapping]]] = ...) -> None: ...

class IndicatorInfo(_message.Message):
    __slots__ = ("type", "name", "min_bars", "default_params")
    class DefaultParamsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    MIN_BARS_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_PARAMS_FIELD_NUMBER: _ClassVar[int]
    type: IndicatorType
    name: str
    min_bars: int
    default_params: _containers.ScalarMap[str, float]
    def __init__(self, type: _Optional[_Union[IndicatorType, str]] = ..., name: _Optional[str] = ..., min_bars: _Optional[int] = ..., default_params: _Optional[_Mapping[str, float]] = ...) -> None: ...

class ListSupportedRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ListSupportedResponse(_message.Message):
    __slots__ = ("indicators",)
    INDICATORS_FIELD_NUMBER: _ClassVar[int]
    indicators: _containers.RepeatedCompositeFieldContainer[IndicatorInfo]
    def __init__(self, indicators: _Optional[_Iterable[_Union[IndicatorInfo, _Mapping]]] = ...) -> None: ...
