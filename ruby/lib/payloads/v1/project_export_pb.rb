# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/project_export.proto

require 'google/protobuf'


descriptor_data = "\n\x17v1/project_export.proto\x12\tschema.v1\"\xec\x03\n\x06Report\x12\x14\n\x0cproject_name\x18\x01 \x01(\t\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12.\n\x08progress\x18\x03 \x01(\x0b\x32\x1a.schema.v1.Report.ProgressH\x00\x12.\n\x08\x63omplete\x18\x04 \x01(\x0b\x32\x1a.schema.v1.Report.CompleteH\x00\x12(\n\x05\x65rror\x18\x05 \x01(\x0b\x32\x17.schema.v1.Report.ErrorH\x00\x12\x39\n\x0eproject_export\x18\x06 \x01(\x0b\x32\x1f.schema.v1.Report.ProjectExportH\x01\x12;\n\x0fproject_preview\x18\x07 \x01(\x0b\x32 .schema.v1.Report.ProjectPreviewH\x01\x1a/\n\x08Progress\x12\x12\n\npercentage\x18\x01 \x01(\x02\x12\x0f\n\x07message\x18\x02 \x01(\t\x1a\x18\n\x08\x43omplete\x12\x0c\n\x04path\x18\x01 \x01(\t\x1a\x1b\n\rProjectExport\x12\n\n\x02id\x18\x01 \x01(\x05\x1a\x1c\n\x0eProjectPreview\x12\n\n\x02id\x18\x01 \x01(\x05\x1a\x18\n\x05\x45rror\x12\x0f\n\x07message\x18\x01 \x01(\tB\x07\n\x05stateB\r\n\x0breport_typeb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V1
    Report = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.Report").msgclass
    Report::Progress = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.Report.Progress").msgclass
    Report::Complete = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.Report.Complete").msgclass
    Report::ProjectExport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.Report.ProjectExport").msgclass
    Report::ProjectPreview = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.Report.ProjectPreview").msgclass
    Report::Error = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v1.Report.Error").msgclass
  end
end
