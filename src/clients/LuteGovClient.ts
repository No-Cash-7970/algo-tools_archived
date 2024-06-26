/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from "@algorandfoundation/algokit-utils";
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  // AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from "@algorandfoundation/algokit-utils/types/app";
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from "@algorandfoundation/algokit-utils/types/app-client";
import type { AppSpec } from "@algorandfoundation/algokit-utils/types/app-spec";
import type {
  SendTransactionResult,
  TransactionToSign,
  SendTransactionFrom,
  SendTransactionParams,
} from "@algorandfoundation/algokit-utils/types/transaction";
import type { ABIResult, TransactionWithSigner } from "algosdk";
import {
  Algodv2,
  OnApplicationComplete,
  Transaction,
  AtomicTransactionComposer,
  modelsv2,
} from "algosdk";
export const APP_SPEC: AppSpec = {
  hints: {
    "updateApplication()void": {
      call_config: {
        update_application: "CALL",
      },
    },
    "setRoot(uint64,byte[32])void": {
      call_config: {
        no_op: "CALL",
      },
    },
    "claim(uint64,byte[32][],bool[])void": {
      call_config: {
        no_op: "CALL",
      },
    },
    "createApplication()void": {
      call_config: {
        no_op: "CREATE",
      },
    },
  },
  bare_call_config: {
    no_op: "NEVER",
    opt_in: "NEVER",
    close_out: "NEVER",
    update_application: "NEVER",
    delete_application: "NEVER",
  },
  schema: {
    local: {
      declared: {},
      reserved: {},
    },
    global: {
      declared: {},
      reserved: {},
    },
  },
  state: {
    global: {
      num_byte_slices: 0,
      num_uints: 0,
    },
    local: {
      num_byte_slices: 0,
      num_uints: 0,
    },
  },
  source: {
    approval:
      "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjkyLjAKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCmludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpjYWxsX1VwZGF0ZUFwcGxpY2F0aW9uICpOT1RfSU1QTEVNRU5URUQgKmNyZWF0ZV9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRAoKKk5PVF9JTVBMRU1FTlRFRDoKCS8vIFRoZSByZXF1ZXN0ZWQgYWN0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIGNvbnRyYWN0LiBBcmUgeW91IHVzaW5nIHRoZSBjb3JyZWN0IE9uQ29tcGxldGU/IERpZCB5b3Ugc2V0IHlvdXIgYXBwIElEPwoJZXJyCgovLyB1cGRhdGVBcHBsaWNhdGlvbigpdm9pZAoqYWJpX3JvdXRlX3VwZGF0ZUFwcGxpY2F0aW9uOgoJLy8gZXhlY3V0ZSB1cGRhdGVBcHBsaWNhdGlvbigpdm9pZAoJY2FsbHN1YiB1cGRhdGVBcHBsaWNhdGlvbgoJaW50IDEKCXJldHVybgoKLy8gdXBkYXRlQXBwbGljYXRpb24oKTogdm9pZAp1cGRhdGVBcHBsaWNhdGlvbjoKCXByb3RvIDAgMAoKCS8vIGNvbnRyYWN0c1xMdXRlR292LmFsZ28udHM6NwoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5hcHAuY3JlYXRvcikKCXR4biBTZW5kZXIKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcENyZWF0b3IKCXBvcAoJPT0KCWFzc2VydAoJcmV0c3ViCgovLyBzZXRSb290KHVpbnQ2NCxieXRlWzMyXSl2b2lkCiphYmlfcm91dGVfc2V0Um9vdDoKCS8vIHJvb3Q6IGJ5dGVbMzJdCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglkdXAKCWxlbgoJaW50IDMyCgk9PQoKCS8vIGFyZ3VtZW50IDAgKHJvb3QpIGZvciBzZXRSb290IG11c3QgYmUgYSBieXRlWzMyXQoJYXNzZXJ0CgoJLy8gYXNzZXRJZDogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBzZXRSb290KHVpbnQ2NCxieXRlWzMyXSl2b2lkCgljYWxsc3ViIHNldFJvb3QKCWludCAxCglyZXR1cm4KCi8vIHNldFJvb3QoYXNzZXRJZDogQXNzZXRJRCwgcm9vdDogU3RhdGljQnl0ZXM8MzI+KTogdm9pZApzZXRSb290OgoJcHJvdG8gMiAwCgoJLy8gY29udHJhY3RzXEx1dGVHb3YuYWxnby50czoxMQoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5hcHAuY3JlYXRvcikKCXR4biBTZW5kZXIKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcENyZWF0b3IKCXBvcAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0c1xMdXRlR292LmFsZ28udHM6MTIKCS8vIHRoaXMucm9vdHMoYXNzZXRJZCkudmFsdWUgPSByb290CglmcmFtZV9kaWcgLTEgLy8gYXNzZXRJZDogQXNzZXRJRAoJaXRvYgoJZnJhbWVfZGlnIC0yIC8vIHJvb3Q6IFN0YXRpY0J5dGVzPDMyPgoJYm94X3B1dAoJcmV0c3ViCgovLyBjbGFpbSh1aW50NjQsYnl0ZVszMl1bXSxib29sW10pdm9pZAoqYWJpX3JvdXRlX2NsYWltOgoJLy8gaXNMZWZ0OiBib29sW10KCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWV4dHJhY3QgMiAwCgoJLy8gcHJvb2Y6IGJ5dGVbMzJdW10KCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWV4dHJhY3QgMiAwCgoJLy8gYXNzZXRJZDogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBjbGFpbSh1aW50NjQsYnl0ZVszMl1bXSxib29sW10pdm9pZAoJY2FsbHN1YiBjbGFpbQoJaW50IDEKCXJldHVybgoKLy8gY2xhaW0oYXNzZXRJZDogQXNzZXRJRCwgcHJvb2Y6IGJ5dGVzMzJbXSwgaXNMZWZ0OiBib29sZWFuW10pOiB2b2lkCmNsYWltOgoJcHJvdG8gMyAwCgoJLy8gY29udHJhY3RzXEx1dGVHb3YuYWxnby50czoxNgoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlci5pc09wdGVkSW5Ub0Fzc2V0KGFzc2V0SWQpKQoJdHhuIFNlbmRlcgoJZnJhbWVfZGlnIC0xIC8vIGFzc2V0SWQ6IEFzc2V0SUQKCWFzc2V0X2hvbGRpbmdfZ2V0IEFzc2V0QmFsYW5jZQoJc3dhcAoJcG9wCglhc3NlcnQKCgkvLyBjb250cmFjdHNcTHV0ZUdvdi5hbGdvLnRzOjE3CgkvLyBhc3NlcnQodGhpcy50eG4uc2VuZGVyLmFzc2V0QmFsYW5jZShhc3NldElkKSA9PT0gMCkKCXR4biBTZW5kZXIKCWZyYW1lX2RpZyAtMSAvLyBhc3NldElkOiBBc3NldElECglhc3NldF9ob2xkaW5nX2dldCBBc3NldEJhbGFuY2UKCXBvcAoJaW50IDAKCT09Cglhc3NlcnQKCgkvLyBjb250cmFjdHNcTHV0ZUdvdi5hbGdvLnRzOjE4CgkvLyBhc3NlcnQodGhpcy52ZXJpZnkoYXNzZXRJZCwgcHJvb2YsIGlzTGVmdCkpCglmcmFtZV9kaWcgLTMgLy8gaXNMZWZ0OiBib29sZWFuW10KCWZyYW1lX2RpZyAtMiAvLyBwcm9vZjogYnl0ZXMzMltdCglmcmFtZV9kaWcgLTEgLy8gYXNzZXRJZDogQXNzZXRJRAoJY2FsbHN1YiB2ZXJpZnkKCWFzc2VydAoKCS8vIGNvbnRyYWN0c1xMdXRlR292LmFsZ28udHM6MTkKCS8vIHNlbmRBc3NldFRyYW5zZmVyKHsKCS8vICAgICAgIGZlZTogMCwKCS8vICAgICAgIHhmZXJBc3NldDogYXNzZXRJZCwKCS8vICAgICAgIGFzc2V0QW1vdW50OiAxLAoJLy8gICAgICAgYXNzZXRTZW5kZXI6IHRoaXMuYXBwLmNyZWF0b3IsCgkvLyAgICAgICBhc3NldFJlY2VpdmVyOiB0aGlzLnR4bi5zZW5kZXIsCgkvLyAgICAgfSkKCWl0eG5fYmVnaW4KCWludCBheGZlcgoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGNvbnRyYWN0c1xMdXRlR292LmFsZ28udHM6MjAKCS8vIGZlZTogMAoJaW50IDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gY29udHJhY3RzXEx1dGVHb3YuYWxnby50czoyMQoJLy8geGZlckFzc2V0OiBhc3NldElkCglmcmFtZV9kaWcgLTEgLy8gYXNzZXRJZDogQXNzZXRJRAoJaXR4bl9maWVsZCBYZmVyQXNzZXQKCgkvLyBjb250cmFjdHNcTHV0ZUdvdi5hbGdvLnRzOjIyCgkvLyBhc3NldEFtb3VudDogMQoJaW50IDEKCWl0eG5fZmllbGQgQXNzZXRBbW91bnQKCgkvLyBjb250cmFjdHNcTHV0ZUdvdi5hbGdvLnRzOjIzCgkvLyBhc3NldFNlbmRlcjogdGhpcy5hcHAuY3JlYXRvcgoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgoJcG9wCglpdHhuX2ZpZWxkIEFzc2V0U2VuZGVyCgoJLy8gY29udHJhY3RzXEx1dGVHb3YuYWxnby50czoyNAoJLy8gYXNzZXRSZWNlaXZlcjogdGhpcy50eG4uc2VuZGVyCgl0eG4gU2VuZGVyCglpdHhuX2ZpZWxkIEFzc2V0UmVjZWl2ZXIKCgkvLyBTdWJtaXQgaW5uZXIgdHJhbnNhY3Rpb24KCWl0eG5fc3VibWl0CglyZXRzdWIKCi8vIHZlcmlmeShhc3NldElkOiBBc3NldElELCBwcm9vZjogYnl0ZXMzMltdLCBpc0xlZnQ6IGJvb2xlYW5bXSk6IGJvb2xlYW4KdmVyaWZ5OgoJcHJvdG8gMyAxCgoJLy8gUHVzaCBlbXB0eSBieXRlcyBhZnRlciB0aGUgZnJhbWUgcG9pbnRlciB0byByZXNlcnZlIHNwYWNlIGZvciBsb2NhbCB2YXJpYWJsZXMKCWJ5dGUgMHgKCWR1cG4gMgoKCS8vIGNvbnRyYWN0c1xMdXRlR292LmFsZ28udHM6MjkKCS8vIGhhc2g6IFN0YXRpY0J5dGVzPDMyPiA9IGJ6ZXJvKDMyKQoJYnl0ZSAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKCWZyYW1lX2J1cnkgMCAvLyBoYXNoOiBTdGF0aWNCeXRlczwzMj4KCgkvLyBjb250cmFjdHNcTHV0ZUdvdi5hbGdvLnRzOjMwCgkvLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb29mLmxlbmd0aDsgaSArPSAxKQoJaW50IDAKCWZyYW1lX2J1cnkgMSAvLyBpOiB1aW50NjQKCipmb3JfMDoKCS8vIGNvbnRyYWN0c1xMdXRlR292LmFsZ28udHM6MzAKCS8vIGkgPCBwcm9vZi5sZW5ndGgKCWZyYW1lX2RpZyAxIC8vIGk6IHVpbnQ2NAoJZnJhbWVfZGlnIC0yIC8vIHByb29mOiBieXRlczMyW10KCWxlbgoJaW50IDMyCgkvCgk8CglieiAqZm9yXzBfZW5kCgoJLy8gKmlmMF9jb25kaXRpb24KCS8vIGNvbnRyYWN0c1xMdXRlR292LmFsZ28udHM6MzEKCS8vIGdsb2JhbHMub3Bjb2RlQnVkZ2V0IDwgMTAwCglnbG9iYWwgT3Bjb2RlQnVkZ2V0CglpbnQgMTAwCgk8CglieiAqaWYwX2VuZAoKCS8vICppZjBfY29uc2VxdWVudAoJLy8gY29udHJhY3RzXEx1dGVHb3YuYWxnby50czozMQoJLy8gaW5jcmVhc2VPcGNvZGVCdWRnZXQoKQoJaXR4bl9iZWdpbgoJaW50IGFwcGwKCWl0eG5fZmllbGQgVHlwZUVudW0KCWludCAwCglpdHhuX2ZpZWxkIEZlZQoJYnl0ZSBiNjQgQ29FQiAvLyAjcHJhZ21hIHZlcnNpb24gMTA7IGludCAxCglkdXAKCWl0eG5fZmllbGQgQXBwcm92YWxQcm9ncmFtCglpdHhuX2ZpZWxkIENsZWFyU3RhdGVQcm9ncmFtCglpbnQgRGVsZXRlQXBwbGljYXRpb24KCWl0eG5fZmllbGQgT25Db21wbGV0aW9uCglpdHhuX3N1Ym1pdAoKKmlmMF9lbmQ6CgkvLyBjb250cmFjdHNcTHV0ZUdvdi5hbGdvLnRzOjMyCgkvLyBwcmV2ID0gaSA/IGhhc2ggOiByYXdCeXRlcyh0aGlzLnR4bi5zZW5kZXIpCglmcmFtZV9kaWcgMSAvLyBpOiB1aW50NjQKCWJ6ICp0ZXJuYXJ5MV9mYWxzZQoJZnJhbWVfZGlnIDAgLy8gaGFzaDogU3RhdGljQnl0ZXM8MzI+CgliICp0ZXJuYXJ5MV9lbmQKCip0ZXJuYXJ5MV9mYWxzZToKCXR4biBTZW5kZXIKCip0ZXJuYXJ5MV9lbmQ6CglmcmFtZV9idXJ5IDIgLy8gcHJldjogYnl0ZVtdCgoJLy8gY29udHJhY3RzXEx1dGVHb3YuYWxnby50czozMwoJLy8gaGFzaCA9IHNoYTI1Nihpc0xlZnRbaV0gPyBwcm9vZltpXSArIHByZXYgOiBwcmV2ICsgcHJvb2ZbaV0pCglmcmFtZV9kaWcgLTMgLy8gaXNMZWZ0OiBib29sZWFuW10KCXN0b3JlIDI1NSAvLyBmdWxsIGFycmF5CglpbnQgMAoJZnJhbWVfZGlnIDEgLy8gaTogdWludDY0CgkrCglsb2FkIDI1NSAvLyBmdWxsIGFycmF5Cglzd2FwCglnZXRiaXQKCWJ6ICp0ZXJuYXJ5Ml9mYWxzZQoJZnJhbWVfZGlnIC0yIC8vIHByb29mOiBieXRlczMyW10KCXN0b3JlIDI1NSAvLyBmdWxsIGFycmF5CglpbnQgMCAvLyBpbml0aWFsIG9mZnNldAoJZnJhbWVfZGlnIDEgLy8gaTogdWludDY0CglpbnQgMzIKCSogLy8gYWNjICogdHlwZUxlbmd0aAoJKwoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJc3dhcAoJaW50IDMyCglleHRyYWN0MwoJZnJhbWVfZGlnIDIgLy8gcHJldjogYnl0ZVtdCgljb25jYXQKCWIgKnRlcm5hcnkyX2VuZAoKKnRlcm5hcnkyX2ZhbHNlOgoJZnJhbWVfZGlnIDIgLy8gcHJldjogYnl0ZVtdCglmcmFtZV9kaWcgLTIgLy8gcHJvb2Y6IGJ5dGVzMzJbXQoJc3RvcmUgMjU1IC8vIGZ1bGwgYXJyYXkKCWludCAwIC8vIGluaXRpYWwgb2Zmc2V0CglmcmFtZV9kaWcgMSAvLyBpOiB1aW50NjQKCWludCAzMgoJKiAvLyBhY2MgKiB0eXBlTGVuZ3RoCgkrCglsb2FkIDI1NSAvLyBmdWxsIGFycmF5Cglzd2FwCglpbnQgMzIKCWV4dHJhY3QzCgljb25jYXQKCip0ZXJuYXJ5Ml9lbmQ6CglzaGEyNTYKCWZyYW1lX2J1cnkgMCAvLyBoYXNoOiBTdGF0aWNCeXRlczwzMj4KCipmb3JfMF9jb250aW51ZToKCS8vIGNvbnRyYWN0c1xMdXRlR292LmFsZ28udHM6MzAKCS8vIGkgKz0gMQoJZnJhbWVfZGlnIDEgLy8gaTogdWludDY0CglpbnQgMQoJKwoJZnJhbWVfYnVyeSAxIC8vIGk6IHVpbnQ2NAoJYiAqZm9yXzAKCipmb3JfMF9lbmQ6CgkvLyBjb250cmFjdHNcTHV0ZUdvdi5hbGdvLnRzOjM1CgkvLyByZXR1cm4gdGhpcy5yb290cyhhc3NldElkKS52YWx1ZSA9PT0gaGFzaDsKCWZyYW1lX2RpZyAtMSAvLyBhc3NldElkOiBBc3NldElECglpdG9iCglib3hfZ2V0CgoJLy8gYm94IHZhbHVlIGRvZXMgbm90IGV4aXN0OiB0aGlzLnJvb3RzKGFzc2V0SWQpLnZhbHVlCglhc3NlcnQKCWZyYW1lX2RpZyAwIC8vIGhhc2g6IFN0YXRpY0J5dGVzPDMyPgoJPT0KCgkvLyBzZXQgdGhlIHN1YnJvdXRpbmUgcmV0dXJuIHZhbHVlCglmcmFtZV9idXJ5IDAKCgkvLyBwb3AgYWxsIGxvY2FsIHZhcmlhYmxlcyBmcm9tIHRoZSBzdGFjawoJcG9wbiAyCglyZXRzdWIKCiphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgoqY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggKmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbgoKCS8vIHRoaXMgY29udHJhY3QgZG9lcyBub3QgaW1wbGVtZW50IHRoZSBnaXZlbiBBQkkgbWV0aG9kIGZvciBjcmVhdGUgTm9PcAoJZXJyCgoqY2FsbF9Ob09wOgoJbWV0aG9kICJzZXRSb290KHVpbnQ2NCxieXRlWzMyXSl2b2lkIgoJbWV0aG9kICJjbGFpbSh1aW50NjQsYnl0ZVszMl1bXSxib29sW10pdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoICphYmlfcm91dGVfc2V0Um9vdCAqYWJpX3JvdXRlX2NsYWltCgoJLy8gdGhpcyBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGdpdmVuIEFCSSBtZXRob2QgZm9yIGNhbGwgTm9PcAoJZXJyCgoqY2FsbF9VcGRhdGVBcHBsaWNhdGlvbjoKCW1ldGhvZCAidXBkYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX3VwZGF0ZUFwcGxpY2F0aW9uCgoJLy8gdGhpcyBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGdpdmVuIEFCSSBtZXRob2QgZm9yIGNhbGwgVXBkYXRlQXBwbGljYXRpb24KCWVycg==",
    clear: "I3ByYWdtYSB2ZXJzaW9uIDEw",
  },
  contract: {
    name: "LuteGov",
    desc: "",
    methods: [
      {
        name: "updateApplication",
        args: [],
        returns: {
          type: "void",
        },
      },
      {
        name: "setRoot",
        args: [
          {
            name: "assetId",
            type: "uint64",
          },
          {
            name: "root",
            type: "byte[32]",
          },
        ],
        returns: {
          type: "void",
        },
      },
      {
        name: "claim",
        args: [
          {
            name: "assetId",
            type: "uint64",
          },
          {
            name: "proof",
            type: "byte[32][]",
          },
          {
            name: "isLeft",
            type: "bool[]",
          },
        ],
        returns: {
          type: "void",
        },
      },
      {
        name: "createApplication",
        args: [],
        returns: {
          type: "void",
        },
      },
    ],
  },
};

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp = {
  onCompleteAction?: "no_op" | OnApplicationComplete.NoOpOC;
};
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn = {
  onCompleteAction: "opt_in" | OnApplicationComplete.OptInOC;
};
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut = {
  onCompleteAction: "close_out" | OnApplicationComplete.CloseOutOC;
};
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp = {
  onCompleteAction:
    | "delete_application"
    | OnApplicationComplete.DeleteApplicationOC;
};
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp = {
  onCompleteAction:
    | "update_application"
    | OnApplicationComplete.UpdateApplicationOC;
};
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint;
  /**
   * Gets the state value as a number.
   */
  asNumber(): number;
};
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array;
  /**
   * Gets the state value as a string
   */
  asString(): string;
};

export type AppCreateCallTransactionResult = AppCallTransactionResult &
  Partial<AppCompilationResult> &
  AppReference;
export type AppUpdateCallTransactionResult = AppCallTransactionResult &
  Partial<AppCompilationResult>;

export type AppClientComposeCallCoreParams = Omit<
  AppClientCallCoreParams,
  "sendParams"
> & {
  sendParams?: Omit<
    SendTransactionParams,
    | "skipSending"
    | "atc"
    | "skipWaiting"
    | "maxRoundsToWaitForConfirmation"
    | "populateAppCallResources"
  >;
};
export type AppClientComposeExecuteParams = Pick<
  SendTransactionParams,
  | "skipWaiting"
  | "maxRoundsToWaitForConfirmation"
  | "populateAppCallResources"
  | "suppressLog"
>;

/**
 * Defines the types of available calls and state of the LuteGov smart contract.
 */
export type LuteGov = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods: Record<
    "updateApplication()void" | "updateApplication",
    {
      argsObj: {};
      argsTuple: [];
      returns: void;
    }
  > &
    Record<
      "setRoot(uint64,byte[32])void" | "setRoot",
      {
        argsObj: {
          assetId: bigint | number;
          root: Uint8Array;
        };
        argsTuple: [assetId: bigint | number, root: Uint8Array];
        returns: void;
      }
    > &
    Record<
      "claim(uint64,byte[32][],bool[])void" | "claim",
      {
        argsObj: {
          assetId: bigint | number;
          proof: Uint8Array[];
          isLeft: boolean[];
        };
        argsTuple: [
          assetId: bigint | number,
          proof: Uint8Array[],
          isLeft: boolean[],
        ];
        returns: void;
      }
    > &
    Record<
      "createApplication()void" | "createApplication",
      {
        argsObj: {};
        argsTuple: [];
        returns: void;
      }
    >;
};
/**
 * Defines the possible abi call signatures
 */
export type LuteGovSig = keyof LuteGov["methods"];
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends LuteGovSig | undefined> = {
  method: TSignature;
  methodArgs: TSignature extends undefined
    ? undefined
    : Array<ABIAppCallArg | undefined>;
} & AppClientCallCoreParams &
  CoreAppCallArgs;
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>;
/**
 * Maps a method signature from the LuteGov smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends LuteGovSig> =
  LuteGov["methods"][TSignature]["argsObj" | "argsTuple"];
/**
 * Maps a method signature from the LuteGov smart contract to the method's return type
 */
export type MethodReturn<TSignature extends LuteGovSig> =
  LuteGov["methods"][TSignature]["returns"];

/**
 * A factory for available 'create' calls
 */
export type LuteGovCreateCalls = (typeof LuteGovCallFactory)["create"];
/**
 * Defines supported create methods for this smart contract
 */
export type LuteGovCreateCallParams =
  TypedCallParams<"createApplication()void"> & OnCompleteNoOp;
/**
 * A factory for available 'update' calls
 */
export type LuteGovUpdateCalls = (typeof LuteGovCallFactory)["update"];
/**
 * Defines supported update methods for this smart contract
 */
export type LuteGovUpdateCallParams =
  TypedCallParams<"updateApplication()void">;
/**
 * Defines arguments required for the deploy method.
 */
export type LuteGovDeployArgs = {
  deployTimeParams?: TealTemplateParams;
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: LuteGovCreateCalls) => LuteGovCreateCallParams;
  /**
   * A delegate which takes a update call factory and returns the update call params for this smart contract
   */
  updateCall?: (callFactory: LuteGovUpdateCalls) => LuteGovUpdateCallParams;
};

/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class LuteGovCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the LuteGov smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(
        args: MethodArgs<"createApplication()void">,
        params: AppClientCallCoreParams &
          CoreAppCallArgs &
          AppClientCompilationParams &
          OnCompleteNoOp = {},
      ) {
        return {
          method: "createApplication()void" as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        };
      },
    };
  }

  /**
   * Gets available update call factories
   */
  static get update() {
    return {
      /**
       * Constructs an update call for the LuteGov smart contract using the updateApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      updateApplication(
        args: MethodArgs<"updateApplication()void">,
        params: AppClientCallCoreParams &
          CoreAppCallArgs &
          AppClientCompilationParams = {},
      ) {
        return {
          method: "updateApplication()void" as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        };
      },
    };
  }

  /**
   * Constructs a no op call for the setRoot(uint64,byte[32])void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static setRoot(
    args: MethodArgs<"setRoot(uint64,byte[32])void">,
    params: AppClientCallCoreParams & CoreAppCallArgs,
  ) {
    return {
      method: "setRoot(uint64,byte[32])void" as const,
      methodArgs: Array.isArray(args) ? args : [args.assetId, args.root],
      ...params,
    };
  }
  /**
   * Constructs a no op call for the claim(uint64,byte[32][],bool[])void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static claim(
    args: MethodArgs<"claim(uint64,byte[32][],bool[])void">,
    params: AppClientCallCoreParams & CoreAppCallArgs,
  ) {
    return {
      method: "claim(uint64,byte[32][],bool[])void" as const,
      methodArgs: Array.isArray(args)
        ? args
        : [args.assetId, args.proof, args.isLeft],
      ...params,
    };
  }
}

/**
 * A client to make calls to the LuteGov smart contract
 */
export class LuteGovClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient;

  private readonly sender: SendTransactionFrom | undefined;

  /**
   * Creates a new instance of `LuteGovClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(
    appDetails: AppDetails,
    private algod: Algodv2,
  ) {
    this.sender = appDetails.sender;
    this.appClient = algokit.getAppClient(
      {
        ...appDetails,
        app: APP_SPEC,
      },
      algod,
    );
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<
    TReturn,
    TResult extends AppCallTransactionResult = AppCallTransactionResult,
  >(
    result: AppCallTransactionResult,
    returnValueFormatter?: (value: any) => TReturn,
  ): AppCallTransactionResultOfType<TReturn> & TResult {
    if (result.return?.decodeError) {
      throw result.return.decodeError;
    }
    const returnValue =
      result.return?.returnValue !== undefined &&
      returnValueFormatter !== undefined
        ? returnValueFormatter(result.return.returnValue)
        : (result.return?.returnValue as TReturn | undefined);
    return {
      ...result,
      return: returnValue,
    } as AppCallTransactionResultOfType<TReturn> & TResult;
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof LuteGov["methods"]>(
    typedCallParams: TypedCallParams<TSignature>,
    returnValueFormatter?: (value: any) => MethodReturn<TSignature>,
  ) {
    return this.mapReturnValue<MethodReturn<TSignature>>(
      await this.appClient.call(typedCallParams),
      returnValueFormatter,
    );
  }

  /**
   * Idempotently deploys the LuteGov smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(
    params: LuteGovDeployArgs & AppClientDeployCoreParams = {},
  ): ReturnType<ApplicationClient["deploy"]> {
    const createArgs = params.createCall?.(LuteGovCallFactory.create);
    const updateArgs = params.updateCall?.(LuteGovCallFactory.update);
    return this.appClient.deploy({
      ...params,
      updateArgs,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    });
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this;
    return {
      /**
       * Creates a new instance of the LuteGov smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(
        args: MethodArgs<"createApplication()void">,
        params: AppClientCallCoreParams &
          AppClientCompilationParams &
          OnCompleteNoOp = {},
      ) {
        return $this.mapReturnValue<
          MethodReturn<"createApplication()void">,
          AppCreateCallTransactionResult
        >(
          await $this.appClient.create(
            LuteGovCallFactory.create.createApplication(args, params),
          ),
        );
      },
    };
  }

  /**
   * Gets available update methods
   */
  public get update() {
    const $this = this;
    return {
      /**
       * Updates an existing instance of the LuteGov smart contract using the updateApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The update result
       */
      async updateApplication(
        args: MethodArgs<"updateApplication()void">,
        params: AppClientCallCoreParams & AppClientCompilationParams = {},
      ) {
        return $this.mapReturnValue<
          MethodReturn<"updateApplication()void">,
          AppUpdateCallTransactionResult
        >(
          await $this.appClient.update(
            LuteGovCallFactory.update.updateApplication(args, params),
          ),
        );
      },
    };
  }

  /**
   * Makes a clear_state call to an existing instance of the LuteGov smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(
    args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {},
  ) {
    return this.appClient.clearState(args);
  }

  /**
   * Calls the setRoot(uint64,byte[32])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public setRoot(
    args: MethodArgs<"setRoot(uint64,byte[32])void">,
    params: AppClientCallCoreParams & CoreAppCallArgs = {},
  ) {
    return this.call(LuteGovCallFactory.setRoot(args, params));
  }

  /**
   * Calls the claim(uint64,byte[32][],bool[])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public claim(
    args: MethodArgs<"claim(uint64,byte[32][],bool[])void">,
    params: AppClientCallCoreParams & CoreAppCallArgs = {},
  ) {
    return this.call(LuteGovCallFactory.claim(args, params));
  }

  public compose(): LuteGovComposer {
    const client = this;
    const atc = new AtomicTransactionComposer();
    let promiseChain: Promise<unknown> = Promise.resolve();
    const resultMappers: Array<undefined | ((x: any) => any)> = [];
    return {
      setRoot(
        args: MethodArgs<"setRoot(uint64,byte[32])void">,
        params?: AppClientComposeCallCoreParams & CoreAppCallArgs,
      ) {
        promiseChain = promiseChain.then(() =>
          client.setRoot(args, {
            ...params,
            sendParams: { ...params?.sendParams, skipSending: true, atc },
          }),
        );
        resultMappers.push(undefined);
        return this;
      },
      claim(
        args: MethodArgs<"claim(uint64,byte[32][],bool[])void">,
        params?: AppClientComposeCallCoreParams & CoreAppCallArgs,
      ) {
        promiseChain = promiseChain.then(() =>
          client.claim(args, {
            ...params,
            sendParams: { ...params?.sendParams, skipSending: true, atc },
          }),
        );
        resultMappers.push(undefined);
        return this;
      },
      get update() {
        const $this = this;
        return {
          updateApplication(
            args: MethodArgs<"updateApplication()void">,
            params?: AppClientComposeCallCoreParams &
              AppClientCompilationParams,
          ) {
            promiseChain = promiseChain.then(() =>
              client.update.updateApplication(args, {
                ...params,
                sendParams: { ...params?.sendParams, skipSending: true, atc },
              }),
            );
            resultMappers.push(undefined);
            return $this;
          },
        };
      },
      clearState(
        args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs,
      ) {
        promiseChain = promiseChain.then(() =>
          client.clearState({
            ...args,
            sendParams: { ...args?.sendParams, skipSending: true, atc },
          }),
        );
        resultMappers.push(undefined);
        return this;
      },
      addTransaction(
        txn:
          | TransactionWithSigner
          | TransactionToSign
          | Transaction
          | Promise<SendTransactionResult>,
        defaultSender?: SendTransactionFrom,
      ) {
        promiseChain = promiseChain.then(async () =>
          atc.addTransaction(
            await algokit.getTransactionWithSigner(
              txn,
              defaultSender ?? client.sender,
            ),
          ),
        );
        return this;
      },
      async atc() {
        await promiseChain;
        return atc;
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain;
        const result = await atc.simulate(
          client.algod,
          new modelsv2.SimulateRequest({ txnGroups: [], ...options }),
        );
        return {
          ...result,
          returns: result.methodResults?.map((val, i) =>
            resultMappers[i] !== undefined
              ? resultMappers[i]!(val.returnValue)
              : val.returnValue,
          ),
        };
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain;
        const result = await algokit.sendAtomicTransactionComposer(
          { atc, sendParams },
          client.algod,
        );
        return {
          ...result,
          returns: result.returns?.map((val, i) =>
            resultMappers[i] !== undefined
              ? resultMappers[i]!(val.returnValue)
              : val.returnValue,
          ),
        };
      },
    } as unknown as LuteGovComposer;
  }
}
export type LuteGovComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the setRoot(uint64,byte[32])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  setRoot(
    args: MethodArgs<"setRoot(uint64,byte[32])void">,
    params?: AppClientComposeCallCoreParams & CoreAppCallArgs,
  ): LuteGovComposer<
    [...TReturns, MethodReturn<"setRoot(uint64,byte[32])void">]
  >;

  /**
   * Calls the claim(uint64,byte[32][],bool[])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  claim(
    args: MethodArgs<"claim(uint64,byte[32][],bool[])void">,
    params?: AppClientComposeCallCoreParams & CoreAppCallArgs,
  ): LuteGovComposer<
    [...TReturns, MethodReturn<"claim(uint64,byte[32][],bool[])void">]
  >;

  /**
   * Gets available update methods
   */
  readonly update: {
    /**
     * Updates an existing instance of the LuteGov smart contract using the updateApplication()void ABI method.
     *
     * @param args The arguments for the smart contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    updateApplication(
      args: MethodArgs<"updateApplication()void">,
      params?: AppClientComposeCallCoreParams & AppClientCompilationParams,
    ): LuteGovComposer<[...TReturns, MethodReturn<"updateApplication()void">]>;
  };

  /**
   * Makes a clear_state call to an existing instance of the LuteGov smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(
    args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs,
  ): LuteGovComposer<[...TReturns, undefined]>;

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(
    txn:
      | TransactionWithSigner
      | TransactionToSign
      | Transaction
      | Promise<SendTransactionResult>,
    defaultSender?: SendTransactionFrom,
  ): LuteGovComposer<TReturns>;
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>;
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(
    options?: SimulateOptions,
  ): Promise<LuteGovComposerSimulateResult<TReturns>>;
  /**
   * Executes the transaction group and returns the results
   */
  execute(
    sendParams?: AppClientComposeExecuteParams,
  ): Promise<LuteGovComposerResults<TReturns>>;
};
export type SimulateOptions = Omit<
  ConstructorParameters<typeof modelsv2.SimulateRequest>[0],
  "txnGroups"
>;
export type LuteGovComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns;
  methodResults: ABIResult[];
  simulateResponse: modelsv2.SimulateResponse;
};
export type LuteGovComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns;
  groupId: string;
  txIds: string[];
  transactions: Transaction[];
};
