import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_api_field_behavior_pb from '../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as tinvest_common_pb from '../tinvest/common_pb'; // proto import: "tinvest/common.proto"


export class GetAccountsRequest extends jspb.Message {
  getStatus(): AccountStatus;
  setStatus(value: AccountStatus): GetAccountsRequest;
  hasStatus(): boolean;
  clearStatus(): GetAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountsRequest): GetAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountsRequest;
  static deserializeBinaryFromReader(message: GetAccountsRequest, reader: jspb.BinaryReader): GetAccountsRequest;
}

export namespace GetAccountsRequest {
  export type AsObject = {
    status?: AccountStatus,
  }

  export enum StatusCase { 
    _STATUS_NOT_SET = 0,
    STATUS = 1,
  }
}

export class GetAccountsResponse extends jspb.Message {
  getAccountsList(): Array<Account>;
  setAccountsList(value: Array<Account>): GetAccountsResponse;
  clearAccountsList(): GetAccountsResponse;
  addAccounts(value?: Account, index?: number): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountsResponse): GetAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountsResponse;
  static deserializeBinaryFromReader(message: GetAccountsResponse, reader: jspb.BinaryReader): GetAccountsResponse;
}

export namespace GetAccountsResponse {
  export type AsObject = {
    accountsList: Array<Account.AsObject>,
  }
}

export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): Account;

  getType(): AccountType;
  setType(value: AccountType): Account;

  getName(): string;
  setName(value: string): Account;

  getStatus(): AccountStatus;
  setStatus(value: AccountStatus): Account;

  getOpenedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOpenedDate(value?: google_protobuf_timestamp_pb.Timestamp): Account;
  hasOpenedDate(): boolean;
  clearOpenedDate(): Account;

  getClosedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosedDate(value?: google_protobuf_timestamp_pb.Timestamp): Account;
  hasClosedDate(): boolean;
  clearClosedDate(): Account;

  getAccessLevel(): AccessLevel;
  setAccessLevel(value: AccessLevel): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    type: AccountType,
    name: string,
    status: AccountStatus,
    openedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    accessLevel: AccessLevel,
  }
}

export class GetMarginAttributesRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GetMarginAttributesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarginAttributesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarginAttributesRequest): GetMarginAttributesRequest.AsObject;
  static serializeBinaryToWriter(message: GetMarginAttributesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarginAttributesRequest;
  static deserializeBinaryFromReader(message: GetMarginAttributesRequest, reader: jspb.BinaryReader): GetMarginAttributesRequest;
}

export namespace GetMarginAttributesRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class GetMarginAttributesResponse extends jspb.Message {
  getLiquidPortfolio(): tinvest_common_pb.MoneyValue | undefined;
  setLiquidPortfolio(value?: tinvest_common_pb.MoneyValue): GetMarginAttributesResponse;
  hasLiquidPortfolio(): boolean;
  clearLiquidPortfolio(): GetMarginAttributesResponse;

  getStartingMargin(): tinvest_common_pb.MoneyValue | undefined;
  setStartingMargin(value?: tinvest_common_pb.MoneyValue): GetMarginAttributesResponse;
  hasStartingMargin(): boolean;
  clearStartingMargin(): GetMarginAttributesResponse;

  getMinimalMargin(): tinvest_common_pb.MoneyValue | undefined;
  setMinimalMargin(value?: tinvest_common_pb.MoneyValue): GetMarginAttributesResponse;
  hasMinimalMargin(): boolean;
  clearMinimalMargin(): GetMarginAttributesResponse;

  getFundsSufficiencyLevel(): tinvest_common_pb.Quotation | undefined;
  setFundsSufficiencyLevel(value?: tinvest_common_pb.Quotation): GetMarginAttributesResponse;
  hasFundsSufficiencyLevel(): boolean;
  clearFundsSufficiencyLevel(): GetMarginAttributesResponse;

  getAmountOfMissingFunds(): tinvest_common_pb.MoneyValue | undefined;
  setAmountOfMissingFunds(value?: tinvest_common_pb.MoneyValue): GetMarginAttributesResponse;
  hasAmountOfMissingFunds(): boolean;
  clearAmountOfMissingFunds(): GetMarginAttributesResponse;

  getCorrectedMargin(): tinvest_common_pb.MoneyValue | undefined;
  setCorrectedMargin(value?: tinvest_common_pb.MoneyValue): GetMarginAttributesResponse;
  hasCorrectedMargin(): boolean;
  clearCorrectedMargin(): GetMarginAttributesResponse;

  getGuaranteeForFutures(): tinvest_common_pb.MoneyValue | undefined;
  setGuaranteeForFutures(value?: tinvest_common_pb.MoneyValue): GetMarginAttributesResponse;
  hasGuaranteeForFutures(): boolean;
  clearGuaranteeForFutures(): GetMarginAttributesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarginAttributesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarginAttributesResponse): GetMarginAttributesResponse.AsObject;
  static serializeBinaryToWriter(message: GetMarginAttributesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarginAttributesResponse;
  static deserializeBinaryFromReader(message: GetMarginAttributesResponse, reader: jspb.BinaryReader): GetMarginAttributesResponse;
}

export namespace GetMarginAttributesResponse {
  export type AsObject = {
    liquidPortfolio?: tinvest_common_pb.MoneyValue.AsObject,
    startingMargin?: tinvest_common_pb.MoneyValue.AsObject,
    minimalMargin?: tinvest_common_pb.MoneyValue.AsObject,
    fundsSufficiencyLevel?: tinvest_common_pb.Quotation.AsObject,
    amountOfMissingFunds?: tinvest_common_pb.MoneyValue.AsObject,
    correctedMargin?: tinvest_common_pb.MoneyValue.AsObject,
    guaranteeForFutures?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export class GetUserTariffRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTariffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTariffRequest): GetUserTariffRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserTariffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTariffRequest;
  static deserializeBinaryFromReader(message: GetUserTariffRequest, reader: jspb.BinaryReader): GetUserTariffRequest;
}

export namespace GetUserTariffRequest {
  export type AsObject = {
  }
}

export class GetUserTariffResponse extends jspb.Message {
  getUnaryLimitsList(): Array<UnaryLimit>;
  setUnaryLimitsList(value: Array<UnaryLimit>): GetUserTariffResponse;
  clearUnaryLimitsList(): GetUserTariffResponse;
  addUnaryLimits(value?: UnaryLimit, index?: number): UnaryLimit;

  getStreamLimitsList(): Array<StreamLimit>;
  setStreamLimitsList(value: Array<StreamLimit>): GetUserTariffResponse;
  clearStreamLimitsList(): GetUserTariffResponse;
  addStreamLimits(value?: StreamLimit, index?: number): StreamLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTariffResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTariffResponse): GetUserTariffResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserTariffResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTariffResponse;
  static deserializeBinaryFromReader(message: GetUserTariffResponse, reader: jspb.BinaryReader): GetUserTariffResponse;
}

export namespace GetUserTariffResponse {
  export type AsObject = {
    unaryLimitsList: Array<UnaryLimit.AsObject>,
    streamLimitsList: Array<StreamLimit.AsObject>,
  }
}

export class UnaryLimit extends jspb.Message {
  getLimitPerMinute(): number;
  setLimitPerMinute(value: number): UnaryLimit;

  getMethodsList(): Array<string>;
  setMethodsList(value: Array<string>): UnaryLimit;
  clearMethodsList(): UnaryLimit;
  addMethods(value: string, index?: number): UnaryLimit;

  getLimitPerSecond(): number;
  setLimitPerSecond(value: number): UnaryLimit;
  hasLimitPerSecond(): boolean;
  clearLimitPerSecond(): UnaryLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnaryLimit.AsObject;
  static toObject(includeInstance: boolean, msg: UnaryLimit): UnaryLimit.AsObject;
  static serializeBinaryToWriter(message: UnaryLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnaryLimit;
  static deserializeBinaryFromReader(message: UnaryLimit, reader: jspb.BinaryReader): UnaryLimit;
}

export namespace UnaryLimit {
  export type AsObject = {
    limitPerMinute: number,
    methodsList: Array<string>,
    limitPerSecond?: number,
  }

  export enum LimitPerSecondCase { 
    _LIMIT_PER_SECOND_NOT_SET = 0,
    LIMIT_PER_SECOND = 3,
  }
}

export class StreamLimit extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): StreamLimit;

  getStreamsList(): Array<string>;
  setStreamsList(value: Array<string>): StreamLimit;
  clearStreamsList(): StreamLimit;
  addStreams(value: string, index?: number): StreamLimit;

  getOpen(): number;
  setOpen(value: number): StreamLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamLimit.AsObject;
  static toObject(includeInstance: boolean, msg: StreamLimit): StreamLimit.AsObject;
  static serializeBinaryToWriter(message: StreamLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamLimit;
  static deserializeBinaryFromReader(message: StreamLimit, reader: jspb.BinaryReader): StreamLimit;
}

export namespace StreamLimit {
  export type AsObject = {
    limit: number,
    streamsList: Array<string>,
    open: number,
  }
}

export class GetInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
  static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
  export type AsObject = {
  }
}

export class GetInfoResponse extends jspb.Message {
  getPremStatus(): boolean;
  setPremStatus(value: boolean): GetInfoResponse;

  getQualStatus(): boolean;
  setQualStatus(value: boolean): GetInfoResponse;

  getQualifiedForWorkWithList(): Array<string>;
  setQualifiedForWorkWithList(value: Array<string>): GetInfoResponse;
  clearQualifiedForWorkWithList(): GetInfoResponse;
  addQualifiedForWorkWith(value: string, index?: number): GetInfoResponse;

  getTariff(): string;
  setTariff(value: string): GetInfoResponse;

  getUserId(): string;
  setUserId(value: string): GetInfoResponse;

  getRiskLevelCode(): string;
  setRiskLevelCode(value: string): GetInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
  static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
  export type AsObject = {
    premStatus: boolean,
    qualStatus: boolean,
    qualifiedForWorkWithList: Array<string>,
    tariff: string,
    userId: string,
    riskLevelCode: string,
  }
}

export class GetBankAccountsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBankAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBankAccountsRequest): GetBankAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: GetBankAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBankAccountsRequest;
  static deserializeBinaryFromReader(message: GetBankAccountsRequest, reader: jspb.BinaryReader): GetBankAccountsRequest;
}

export namespace GetBankAccountsRequest {
  export type AsObject = {
  }
}

export class GetBankAccountsResponse extends jspb.Message {
  getBankAccountsList(): Array<BankAccount>;
  setBankAccountsList(value: Array<BankAccount>): GetBankAccountsResponse;
  clearBankAccountsList(): GetBankAccountsResponse;
  addBankAccounts(value?: BankAccount, index?: number): BankAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBankAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBankAccountsResponse): GetBankAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBankAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBankAccountsResponse;
  static deserializeBinaryFromReader(message: GetBankAccountsResponse, reader: jspb.BinaryReader): GetBankAccountsResponse;
}

export namespace GetBankAccountsResponse {
  export type AsObject = {
    bankAccountsList: Array<BankAccount.AsObject>,
  }
}

export class BankAccount extends jspb.Message {
  getId(): string;
  setId(value: string): BankAccount;

  getName(): string;
  setName(value: string): BankAccount;

  getMoneyList(): Array<tinvest_common_pb.MoneyValue>;
  setMoneyList(value: Array<tinvest_common_pb.MoneyValue>): BankAccount;
  clearMoneyList(): BankAccount;
  addMoney(value?: tinvest_common_pb.MoneyValue, index?: number): tinvest_common_pb.MoneyValue;

  getOpenedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOpenedDate(value?: google_protobuf_timestamp_pb.Timestamp): BankAccount;
  hasOpenedDate(): boolean;
  clearOpenedDate(): BankAccount;

  getType(): AccountType;
  setType(value: AccountType): BankAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BankAccount.AsObject;
  static toObject(includeInstance: boolean, msg: BankAccount): BankAccount.AsObject;
  static serializeBinaryToWriter(message: BankAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BankAccount;
  static deserializeBinaryFromReader(message: BankAccount, reader: jspb.BinaryReader): BankAccount;
}

export namespace BankAccount {
  export type AsObject = {
    id: string,
    name: string,
    moneyList: Array<tinvest_common_pb.MoneyValue.AsObject>,
    openedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: AccountType,
  }
}

export class CurrencyTransferRequest extends jspb.Message {
  getFromAccountId(): string;
  setFromAccountId(value: string): CurrencyTransferRequest;

  getToAccountId(): string;
  setToAccountId(value: string): CurrencyTransferRequest;

  getAmount(): tinvest_common_pb.MoneyValue | undefined;
  setAmount(value?: tinvest_common_pb.MoneyValue): CurrencyTransferRequest;
  hasAmount(): boolean;
  clearAmount(): CurrencyTransferRequest;

  getTransactionId(): string;
  setTransactionId(value: string): CurrencyTransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyTransferRequest): CurrencyTransferRequest.AsObject;
  static serializeBinaryToWriter(message: CurrencyTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyTransferRequest;
  static deserializeBinaryFromReader(message: CurrencyTransferRequest, reader: jspb.BinaryReader): CurrencyTransferRequest;
}

export namespace CurrencyTransferRequest {
  export type AsObject = {
    fromAccountId: string,
    toAccountId: string,
    amount?: tinvest_common_pb.MoneyValue.AsObject,
    transactionId: string,
  }
}

export class CurrencyTransferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyTransferResponse): CurrencyTransferResponse.AsObject;
  static serializeBinaryToWriter(message: CurrencyTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyTransferResponse;
  static deserializeBinaryFromReader(message: CurrencyTransferResponse, reader: jspb.BinaryReader): CurrencyTransferResponse;
}

export namespace CurrencyTransferResponse {
  export type AsObject = {
  }
}

export class PayInRequest extends jspb.Message {
  getFromAccountId(): string;
  setFromAccountId(value: string): PayInRequest;

  getToAccountId(): string;
  setToAccountId(value: string): PayInRequest;

  getAmount(): tinvest_common_pb.MoneyValue | undefined;
  setAmount(value?: tinvest_common_pb.MoneyValue): PayInRequest;
  hasAmount(): boolean;
  clearAmount(): PayInRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PayInRequest): PayInRequest.AsObject;
  static serializeBinaryToWriter(message: PayInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayInRequest;
  static deserializeBinaryFromReader(message: PayInRequest, reader: jspb.BinaryReader): PayInRequest;
}

export namespace PayInRequest {
  export type AsObject = {
    fromAccountId: string,
    toAccountId: string,
    amount?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export class PayInResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PayInResponse): PayInResponse.AsObject;
  static serializeBinaryToWriter(message: PayInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayInResponse;
  static deserializeBinaryFromReader(message: PayInResponse, reader: jspb.BinaryReader): PayInResponse;
}

export namespace PayInResponse {
  export type AsObject = {
  }
}

export class GetAccountValuesRequest extends jspb.Message {
  getAccountsList(): Array<string>;
  setAccountsList(value: Array<string>): GetAccountValuesRequest;
  clearAccountsList(): GetAccountValuesRequest;
  addAccounts(value: string, index?: number): GetAccountValuesRequest;

  getValuesList(): Array<AccountValue>;
  setValuesList(value: Array<AccountValue>): GetAccountValuesRequest;
  clearValuesList(): GetAccountValuesRequest;
  addValues(value: AccountValue, index?: number): GetAccountValuesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountValuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountValuesRequest): GetAccountValuesRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountValuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountValuesRequest;
  static deserializeBinaryFromReader(message: GetAccountValuesRequest, reader: jspb.BinaryReader): GetAccountValuesRequest;
}

export namespace GetAccountValuesRequest {
  export type AsObject = {
    accountsList: Array<string>,
    valuesList: Array<AccountValue>,
  }
}

export class GetAccountValuesResponse extends jspb.Message {
  getAccountsList(): Array<AccountValuesWithParameters>;
  setAccountsList(value: Array<AccountValuesWithParameters>): GetAccountValuesResponse;
  clearAccountsList(): GetAccountValuesResponse;
  addAccounts(value?: AccountValuesWithParameters, index?: number): AccountValuesWithParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountValuesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountValuesResponse): GetAccountValuesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountValuesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountValuesResponse;
  static deserializeBinaryFromReader(message: GetAccountValuesResponse, reader: jspb.BinaryReader): GetAccountValuesResponse;
}

export namespace GetAccountValuesResponse {
  export type AsObject = {
    accountsList: Array<AccountValuesWithParameters.AsObject>,
  }
}

export class AccountValuesWithParameters extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): AccountValuesWithParameters;

  getValuesList(): Array<InstrumentParameter>;
  setValuesList(value: Array<InstrumentParameter>): AccountValuesWithParameters;
  clearValuesList(): AccountValuesWithParameters;
  addValues(value?: InstrumentParameter, index?: number): InstrumentParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountValuesWithParameters.AsObject;
  static toObject(includeInstance: boolean, msg: AccountValuesWithParameters): AccountValuesWithParameters.AsObject;
  static serializeBinaryToWriter(message: AccountValuesWithParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountValuesWithParameters;
  static deserializeBinaryFromReader(message: AccountValuesWithParameters, reader: jspb.BinaryReader): AccountValuesWithParameters;
}

export namespace AccountValuesWithParameters {
  export type AsObject = {
    accountId: string,
    valuesList: Array<InstrumentParameter.AsObject>,
  }
}

export class InstrumentParameter extends jspb.Message {
  getName(): AccountValue;
  setName(value: AccountValue): InstrumentParameter;

  getValue(): tinvest_common_pb.MoneyValue | undefined;
  setValue(value?: tinvest_common_pb.MoneyValue): InstrumentParameter;
  hasValue(): boolean;
  clearValue(): InstrumentParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentParameter.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentParameter): InstrumentParameter.AsObject;
  static serializeBinaryToWriter(message: InstrumentParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentParameter;
  static deserializeBinaryFromReader(message: InstrumentParameter, reader: jspb.BinaryReader): InstrumentParameter;
}

export namespace InstrumentParameter {
  export type AsObject = {
    name: AccountValue,
    value?: tinvest_common_pb.MoneyValue.AsObject,
  }
}

export enum AccountType { 
  ACCOUNT_TYPE_UNSPECIFIED = 0,
  ACCOUNT_TYPE_TINKOFF = 1,
  ACCOUNT_TYPE_TINKOFF_IIS = 2,
  ACCOUNT_TYPE_INVEST_BOX = 3,
  ACCOUNT_TYPE_INVEST_FUND = 4,
  ACCOUNT_TYPE_DEBIT = 5,
  ACCOUNT_TYPE_SAVING = 6,
  ACCOUNT_TYPE_DFA = 7,
}
export enum AccountStatus { 
  ACCOUNT_STATUS_UNSPECIFIED = 0,
  ACCOUNT_STATUS_NEW = 1,
  ACCOUNT_STATUS_OPEN = 2,
  ACCOUNT_STATUS_CLOSED = 3,
  ACCOUNT_STATUS_ALL = 4,
}
export enum AccessLevel { 
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = 0,
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = 1,
  ACCOUNT_ACCESS_LEVEL_READ_ONLY = 2,
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS = 3,
}
export enum AccountValue { 
  ACCOUNT_VALUE_UNSPECIFIED = 0,
  ACCOUNT_VALUE_MARGIN_FEE = 1,
  ACCOUNT_VALUE_AMOUNT_WITHOUT_EXTRA_FEE = 2,
}
