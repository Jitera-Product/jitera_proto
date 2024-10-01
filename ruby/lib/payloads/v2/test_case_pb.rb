# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/test_case.proto

require 'google/protobuf'
require 'google/protobuf/struct_pb'


descriptor_data = "\n\x12v2/test_case.proto\x12\tschema.v2\x1a\x13v2/block_core.proto\x1a\x1cgoogle/protobuf/struct.proto\"\x83\x01\n\x08TestCase\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05order\x18\x02 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x03 \x01(\t\x12\x13\n\x0buse_case_id\x18\x04 \x01(\x05\x12\x0f\n\x07node_id\x18\x05 \x01(\t\x12&\n\x05steps\x18\x06 \x03(\x0b\x32\x17.schema.v2.TestCaseStep\"J\n\x0cTestCaseStep\x12\r\n\x05order\x18\x01 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\x12\x0c\n\x04step\x18\x03 \x01(\t\x12\x0f\n\x07node_id\x18\x04 \x01(\t\"\xb4\x01\n\x11TestCasesCreation\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x44\n\x12test_configuration\x18\x03 \x01(\x0b\x32(.schema.v2.TestCasesRunTestConfiguration\x12(\n\tuse_cases\x18\x04 \x03(\x0b\x32\x15.schema.v2.core.Block\"\xe0\x01\n\x17TestCasesCreationReport\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\'\n\ntest_cases\x18\x02 \x03(\x0b\x32\x13.schema.v2.TestCase\x12\x0e\n\x06\x65rrors\x18\x03 \x03(\t\x12\x39\n\x06status\x18\x04 \x01(\x0e\x32).schema.v2.TestCasesCreationReport.Status\"4\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0f\n\x0bIN_PROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\"\xae\x01\n\x0cTestCasesRun\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x44\n\x12test_configuration\x18\x03 \x01(\x0b\x32(.schema.v2.TestCasesRunTestConfiguration\x12\'\n\ntest_cases\x18\x04 \x03(\x0b\x32\x13.schema.v2.TestCase\"\xed\x01\n\x1dTestCasesRunTestConfiguration\x12\x0b\n\x03url\x18\x01 \x01(\t\x12\x10\n\x08username\x18\x02 \x01(\t\x12\x10\n\x08password\x18\x03 \x01(\t\x12\x17\n\nlogin_path\x18\x04 \x01(\tH\x00\x88\x01\x01\x12\x1b\n\x13project_generate_id\x18\x05 \x01(\x05\x12\x12\n\nproject_id\x18\x06 \x01(\x05\x12%\n\x18token_expiration_seconds\x18\x07 \x01(\x05H\x01\x88\x01\x01\x42\r\n\x0b_login_pathB\x1b\n\x19_token_expiration_seconds\"\xb8\x02\n#TestCaseAuthorisationCreationReport\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x0c\n\x04\x63ode\x18\x03 \x01(\t\x12\x33\n\rstorage_state\x18\x04 \x01(\x0b\x32\x17.google.protobuf.StructH\x00\x88\x01\x01\x12\x0e\n\x06\x65rrors\x18\x05 \x03(\t\x12\x45\n\x06status\x18\x06 \x01(\x0e\x32\x35.schema.v2.TestCaseAuthorisationCreationReport.Status\"4\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0f\n\x0bIN_PROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x42\x10\n\x0e_storage_state\"\xe3\x04\n\x12TestCasesRunReport\x12\x1b\n\x13project_generate_id\x18\x01 \x01(\x05\x12\x34\n\x06status\x18\x02 \x01(\x0e\x32$.schema.v2.TestCasesRunReport.Status\x12\x0e\n\x06\x65rrors\x18\x04 \x03(\t\x12\x41\n\ttest_case\x18\x05 \x01(\x0b\x32,.schema.v2.TestCasesRunReport.TestCaseSourceH\x00\x12J\n\x0etest_case_step\x18\x06 \x01(\x0b\x32\x30.schema.v2.TestCasesRunReport.TestCaseStepSourceH\x00\x1a\xc1\x01\n\x12TestCaseStepSource\x12\x0f\n\x07node_id\x18\x01 \x01(\t\x12\x11\n\x04\x63ode\x18\x02 \x01(\tH\x00\x88\x01\x01\x12\x17\n\nscreenshot\x18\x03 \x01(\tH\x01\x88\x01\x01\x12\x14\n\x07message\x18\x04 \x01(\tH\x02\x88\x01\x01\x12\x34\n\x06status\x18\x05 \x01(\x0e\x32$.schema.v2.TestCasesRunReport.StatusB\x07\n\x05_codeB\r\n\x0b_screenshotB\n\n\x08_message\x1aW\n\x0eTestCaseSource\x12\x0f\n\x07node_id\x18\x01 \x01(\t\x12\x34\n\x06status\x18\x02 \x01(\x0e\x32$.schema.v2.TestCasesRunReport.Status\"4\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0f\n\x0bIN_PROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x42\x08\n\x06sourceb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool

begin
  pool.add_serialized_file(descriptor_data)
rescue TypeError => e
  # Compatibility code: will be removed in the next major version.
  require 'google/protobuf/descriptor_pb'
  parsed = Google::Protobuf::FileDescriptorProto.decode(descriptor_data)
  parsed.clear_dependency
  serialized = parsed.class.encode(parsed)
  file = pool.add_serialized_file(serialized)
  warn "Warning: Protobuf detected an import path issue while loading generated file #{__FILE__}"
  imports = [
    ["schema.v2.core.Block", "v2/block_core.proto"],
    ["google.protobuf.Struct", "google/protobuf/struct.proto"],
  ]
  imports.each do |type_name, expected_filename|
    import_file = pool.lookup(type_name).file_descriptor
    if import_file.name != expected_filename
      warn "- #{file.name} imports #{expected_filename}, but that import was loaded as #{import_file.name}"
    end
  end
  warn "Each proto file must use a consistent fully-qualified name."
  warn "This will become an error in the next major version."
end

module Schema
  module V2
    TestCase = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCase").msgclass
    TestCaseStep = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCaseStep").msgclass
    TestCasesCreation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesCreation").msgclass
    TestCasesCreationReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesCreationReport").msgclass
    TestCasesCreationReport::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesCreationReport.Status").enummodule
    TestCasesRun = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRun").msgclass
    TestCasesRunTestConfiguration = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunTestConfiguration").msgclass
    TestCaseAuthorisationCreationReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCaseAuthorisationCreationReport").msgclass
    TestCaseAuthorisationCreationReport::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCaseAuthorisationCreationReport.Status").enummodule
    TestCasesRunReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunReport").msgclass
    TestCasesRunReport::TestCaseStepSource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunReport.TestCaseStepSource").msgclass
    TestCasesRunReport::TestCaseSource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunReport.TestCaseSource").msgclass
    TestCasesRunReport::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TestCasesRunReport.Status").enummodule
  end
end
