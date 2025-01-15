# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/test_case.proto

require 'google/protobuf'

require 'v2/browser_pb'
require 'v2/block_core_pb'
require 'v2/project_page_import_pb'
require 'v2/test_case_common_pb'


descriptor_data = "\n\x12v2/test_case.proto\x12\tschema.v2\x1a\x10v2/browser.proto\x1a\x13v2/block_core.proto\x1a\x1cv2/project_page_import.proto\x1a\x19v2/test_case_common.proto\"\xe8\x02\n\x08TestCase\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05order\x18\x02 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x03 \x01(\t\x12\x13\n\x0buse_case_id\x18\x04 \x01(\x05\x12\x0f\n\x07node_id\x18\x05 \x01(\t\x12&\n\x05steps\x18\x06 \x03(\x0b\x32\x17.schema.v2.TestCaseStep\x12\x1b\n\x0eupdateRequired\x18\x07 \x01(\x08H\x00\x88\x01\x01\x12J\n\x14\x61uthentication_state\x18\x08 \x01(\x0e\x32\'.schema.v2.TestCase.AuthenticationStateH\x01\x88\x01\x01\"N\n\x13\x41uthenticationState\x12\r\n\tUNDEFINED\x10\x00\x12\x15\n\x11NOT_AUTHENTICATED\x10\x01\x12\x11\n\rAUTHENTICATED\x10\x02\x42\x11\n\x0f_updateRequiredB\x17\n\x15_authentication_state\"z\n\x0cTestCaseStep\x12\r\n\x05order\x18\x01 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\x12\x0c\n\x04step\x18\x03 \x01(\t\x12\x0f\n\x07node_id\x18\x04 \x01(\t\x12\x1b\n\x0eupdateRequired\x18\x05 \x01(\x08H\x00\x88\x01\x01\x42\x11\n\x0f_updateRequired\"\xe3\x01\n\x11TestCasesCreation\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12U\n\x12test_configuration\x18\x03 \x01(\x0b\x32\x39.schema.v2.test_case_common.TestCasesRunTestConfiguration\x12(\n\tuse_cases\x18\x04 \x03(\x0b\x32\x15.schema.v2.core.Block\x12\x1c\n\x14master_language_code\x18\x05 \x01(\t\"\xe6\x01\n\x15TestCasesRegeneration\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12U\n\x12test_configuration\x18\x03 \x01(\x0b\x32\x39.schema.v2.test_case_common.TestCasesRunTestConfiguration\x12\'\n\ntest_cases\x18\x04 \x03(\x0b\x32\x13.schema.v2.TestCase\x12\x1c\n\x14master_language_code\x18\x05 \x01(\t\"\xee\x02\n\x1bTestCasesRegenerationReport\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\'\n\ntest_cases\x18\x03 \x03(\x0b\x32\x13.schema.v2.TestCase\x12=\n\x06status\x18\x04 \x01(\x0e\x32-.schema.v2.TestCasesRegenerationReport.Status\x12\x0e\n\x06\x65rrors\x18\x05 \x03(\t\x12\x11\n\x04\x63ode\x18\x06 \x01(\tH\x00\x88\x01\x01\x12\x42\n\rstorage_state\x18\x07 \x01(\x0b\x32&.schema.v2.browser.BrowserStorageStateH\x01\x88\x01\x01\"4\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0f\n\x0bIN_PROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x42\x07\n\x05_codeB\x10\n\x0e_storage_state\"\xb0\x02\n\"ProjectImportPageTestCasesCreation\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12U\n\x12test_configuration\x18\x03 \x01(\x0b\x32\x39.schema.v2.test_case_common.TestCasesRunTestConfiguration\x12(\n\tuse_cases\x18\x04 \x03(\x0b\x32\x15.schema.v2.core.Block\x12:\n\x14project_import_pages\x18\x05 \x03(\x0b\x32\x1c.schema.v2.ProjectImportPage\x12\x1c\n\x14master_language_code\x18\x06 \x01(\t\"\xfe\x02\n\x17TestCasesCreationReport\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\'\n\ntest_cases\x18\x02 \x03(\x0b\x32\x13.schema.v2.TestCase\x12\x0e\n\x06\x65rrors\x18\x03 \x03(\t\x12\x39\n\x06status\x18\x04 \x01(\x0e\x32).schema.v2.TestCasesCreationReport.Status\x12\x11\n\x04\x63ode\x18\x05 \x01(\tH\x00\x88\x01\x01\x12\x42\n\rstorage_state\x18\x06 \x01(\x0b\x32&.schema.v2.browser.BrowserStorageStateH\x01\x88\x01\x01\x12\x19\n\x0ctracing_path\x18\x07 \x01(\tH\x02\x88\x01\x01\"4\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0f\n\x0bIN_PROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x42\x07\n\x05_codeB\x10\n\x0e_storage_stateB\x0f\n\r_tracing_path\"\xbf\x01\n\x0cTestCasesRun\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12U\n\x12test_configuration\x18\x03 \x01(\x0b\x32\x39.schema.v2.test_case_common.TestCasesRunTestConfiguration\x12\'\n\ntest_cases\x18\x04 \x03(\x0b\x32\x13.schema.v2.TestCase\"\xbe\x02\n#TestCaseAuthorisationCreationReport\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x11\n\x04\x63ode\x18\x03 \x01(\tH\x00\x88\x01\x01\x12=\n\rstorage_state\x18\x04 \x01(\x0b\x32&.schema.v2.browser.BrowserStorageState\x12\x0e\n\x06\x65rrors\x18\x05 \x03(\t\x12\x45\n\x06status\x18\x06 \x01(\x0e\x32\x35.schema.v2.TestCaseAuthorisationCreationReport.Status\"4\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0f\n\x0bIN_PROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x42\x07\n\x05_code\"\x81\x06\n\x12TestCasesRunReport\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x34\n\x06status\x18\x02 \x01(\x0e\x32$.schema.v2.TestCasesRunReport.Status\x12\x0e\n\x06\x65rrors\x18\x04 \x03(\t\x12\x41\n\ttest_case\x18\x05 \x01(\x0b\x32,.schema.v2.TestCasesRunReport.TestCaseSourceH\x00\x12J\n\x0etest_case_step\x18\x06 \x01(\x0b\x32\x30.schema.v2.TestCasesRunReport.TestCaseStepSourceH\x00\x12\x11\n\x04\x63ode\x18\x07 \x01(\tH\x01\x88\x01\x01\x12\x42\n\rstorage_state\x18\x08 \x01(\x0b\x32&.schema.v2.browser.BrowserStorageStateH\x02\x88\x01\x01\x12\x19\n\x0ctracing_path\x18\t \x01(\tH\x03\x88\x01\x01\x1a\xc1\x01\n\x12TestCaseStepSource\x12\x0f\n\x07node_id\x18\x01 \x01(\t\x12\x11\n\x04\x63ode\x18\x02 \x01(\tH\x00\x88\x01\x01\x12\x17\n\nscreenshot\x18\x03 \x01(\tH\x01\x88\x01\x01\x12\x14\n\x07message\x18\x04 \x01(\tH\x02\x88\x01\x01\x12\x34\n\x06status\x18\x05 \x01(\x0e\x32$.schema.v2.TestCasesRunReport.StatusB\x07\n\x05_codeB\r\n\x0b_screenshotB\n\n\x08_message\x1aW\n\x0eTestCaseSource\x12\x0f\n\x07node_id\x18\x01 \x01(\t\x12\x34\n\x06status\x18\x02 \x01(\x0e\x32$.schema.v2.TestCasesRunReport.Status\"4\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0f\n\x0bIN_PROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x42\x08\n\x06sourceB\x07\n\x05_codeB\x10\n\x0e_storage_stateB\x0f\n\r_tracing_pathb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    TestCase = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCase").msgclass
    TestCase::AuthenticationState = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCase.AuthenticationState").enummodule
    TestCaseStep = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCaseStep").msgclass
    TestCasesCreation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesCreation").msgclass
    TestCasesRegeneration = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRegeneration").msgclass
    TestCasesRegenerationReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRegenerationReport").msgclass
    TestCasesRegenerationReport::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRegenerationReport.Status").enummodule
    ProjectImportPageTestCasesCreation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectImportPageTestCasesCreation").msgclass
    TestCasesCreationReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesCreationReport").msgclass
    TestCasesCreationReport::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesCreationReport.Status").enummodule
    TestCasesRun = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRun").msgclass
    TestCaseAuthorisationCreationReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCaseAuthorisationCreationReport").msgclass
    TestCaseAuthorisationCreationReport::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCaseAuthorisationCreationReport.Status").enummodule
    TestCasesRunReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunReport").msgclass
    TestCasesRunReport::TestCaseStepSource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunReport.TestCaseStepSource").msgclass
    TestCasesRunReport::TestCaseSource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunReport.TestCaseSource").msgclass
    TestCasesRunReport::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunReport.Status").enummodule
  end
end
