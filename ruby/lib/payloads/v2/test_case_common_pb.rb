# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/test_case_common.proto

require 'google/protobuf'

require 'v2/browser_pb'
require 'google/protobuf/struct_pb'


descriptor_data = "\n\x19v2/test_case_common.proto\x12\x1aschema.v2.test_case_common\x1a\x10v2/browser.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xaf\x01\n\x10\x45nvConfiguration\x12 \n\x13http_basic_username\x18\x01 \x01(\tH\x00\x88\x01\x01\x12 \n\x13http_basic_password\x18\x02 \x01(\tH\x01\x88\x01\x01\x12\'\n\x06header\x18\x03 \x03(\x0b\x32\x17.google.protobuf.StructB\x16\n\x14_http_basic_usernameB\x16\n\x14_http_basic_password\"\xb9\x03\n\x1dTestCasesRunTestConfiguration\x12\x10\n\x03url\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x10\n\x08username\x18\x02 \x01(\t\x12\x10\n\x08password\x18\x03 \x01(\t\x12\x17\n\nlogin_path\x18\x04 \x01(\tH\x01\x88\x01\x01\x12\x1b\n\x13project_generate_id\x18\x05 \x01(\x05\x12\x12\n\nproject_id\x18\x06 \x01(\x05\x12%\n\x18token_expiration_seconds\x18\x07 \x01(\x05H\x02\x88\x01\x01\x12\x11\n\x04\x63ode\x18\x08 \x01(\tH\x03\x88\x01\x01\x12=\n\rstorage_state\x18\t \x01(\x0b\x32&.schema.v2.browser.BrowserStorageState\x12L\n\x11\x65nv_configuration\x18\n \x01(\x0b\x32,.schema.v2.test_case_common.EnvConfigurationH\x04\x88\x01\x01\x42\x06\n\x04_urlB\r\n\x0b_login_pathB\x1b\n\x19_token_expiration_secondsB\x07\n\x05_codeB\x14\n\x12_env_configurationb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    module TestCaseCommon
      EnvConfiguration = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.test_case_common.EnvConfiguration").msgclass
      TestCasesRunTestConfiguration = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.test_case_common.TestCasesRunTestConfiguration").msgclass
    end
  end
end
