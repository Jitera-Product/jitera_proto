# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source_frontend.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'


descriptor_data = "\n v2/project_source_frontend.proto\x12\tschema.v2\x1a\x1cgoogle/protobuf/struct.proto\x1a\x17v2/project_source.proto\x1a v2/component_specification.proto\"\x99\x08\n\x11\x46rontendUIChanges\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12.\n\x06tables\x18\x02 \x03(\x0b\x32\x1e.schema.v2.ProjectSource.Table\x12\x34\n\trelations\x18\x03 \x03(\x0b\x32!.schema.v2.ProjectSource.Relation\x12\x30\n\x0eproject_source\x18\x04 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12(\n\nblock_diff\x18\x05 \x01(\x0b\x32\x14.schema.v2.BlockDiff\x12\x1b\n\x03git\x18\x06 \x01(\x0b\x32\x0e.schema.v2.Git\x12+\n\timport_by\x18\x07 \x01(\x0e\x32\x13.schema.v2.ImportByH\x01\x88\x01\x01\x12\x37\n\x0fgenerate_source\x18\x08 \x01(\x0b\x32\x19.schema.v2.GenerateSourceH\x02\x88\x01\x01\x12\x35\n\x04html\x18\t \x01(\x0b\x32%.schema.v2.FrontendUIChanges.HtmlInfoH\x00\x12\x37\n\x05\x66igma\x18\n \x01(\x0b\x32&.schema.v2.FrontendUIChanges.FigmaInfoH\x00\x12\x19\n\x0cusers_prompt\x18\x0b \x01(\tH\x03\x88\x01\x01\x12\"\n\x1ais_non_failed_regeneration\x18\r \x01(\x08\x1ap\n\nHtmlScreen\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x11\n\thtml_code\x18\x02 \x01(\t\x12\x43\n\x18\x63omponent_specifications\x18\x03 \x03(\x0b\x32!.schema.v2.ComponentSpecification\x1a\x9b\x01\n\x0b\x46igmaScreen\x12\x0f\n\x07node_id\x18\x01 \x01(\t\x12\x10\n\x08\x66ile_key\x18\x02 \x01(\t\x12\x16\n\timage_uri\x18\x03 \x01(\tH\x00\x88\x01\x01\x12\x43\n\x18\x63omponent_specifications\x18\x04 \x03(\x0b\x32!.schema.v2.ComponentSpecificationB\x0c\n\n_image_uri\x1a\x44\n\x08HtmlInfo\x12\x38\n\x07screens\x18\x01 \x03(\x0b\x32\'.schema.v2.FrontendUIChanges.HtmlScreen\x1a\\\n\tFigmaInfo\x12\x14\n\x0c\x61\x63\x63\x65ss_token\x18\x01 \x01(\t\x12\x39\n\x07screens\x18\x03 \x03(\x0b\x32(.schema.v2.FrontendUIChanges.FigmaScreenB\x06\n\x04\x64\x61taB\x0c\n\n_import_byB\x12\n\x10_generate_sourceB\x0f\n\r_users_prompt\"\xa9\x05\n\x1bProjectSourceFrontendReport\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x19\n\x11project_source_id\x18\x03 \x01(\x05\x12\x13\n\x0btoken_usage\x18\x04 \x01(\x05\x12\x0e\n\x06module\x18\x05 \x01(\t\x12-\n\x07payload\x18\x06 \x01(\x0b\x32\x17.google.protobuf.StructH\x01\x88\x01\x01\x12\x43\n\x08progress\x18\x07 \x01(\x0b\x32/.schema.v2.ProjectSourceFrontendReport.ProgressH\x00\x12\x43\n\x08\x63omplete\x18\x08 \x01(\x0b\x32/.schema.v2.ProjectSourceFrontendReport.CompleteH\x00\x12=\n\x05\x65rror\x18\t \x01(\x0b\x32,.schema.v2.ProjectSourceFrontendReport.ErrorH\x00\x1aj\n\x08Progress\x12\x12\n\npercentage\x18\x01 \x01(\x05\x12\x0f\n\x07message\x18\x02 \x01(\t\x12-\n\x07payload\x18\x03 \x01(\x0b\x32\x17.google.protobuf.StructH\x00\x88\x01\x01\x42\n\n\x08_payload\x1aS\n\x05\x45rror\x12\x0f\n\x07message\x18\x01 \x01(\t\x12-\n\x07payload\x18\x02 \x01(\x0b\x32\x17.google.protobuf.StructH\x00\x88\x01\x01\x42\n\n\x08_payload\x1a\x45\n\x08\x43omplete\x12-\n\x07payload\x18\x01 \x01(\x0b\x32\x17.google.protobuf.StructH\x00\x88\x01\x01\x42\n\n\x08_payloadB\x07\n\x05stateB\n\n\x08_payloadb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    FrontendUIChanges = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.FrontendUIChanges").msgclass
    FrontendUIChanges::HtmlScreen = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.FrontendUIChanges.HtmlScreen").msgclass
    FrontendUIChanges::FigmaScreen = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.FrontendUIChanges.FigmaScreen").msgclass
    FrontendUIChanges::HtmlInfo = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.FrontendUIChanges.HtmlInfo").msgclass
    FrontendUIChanges::FigmaInfo = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.FrontendUIChanges.FigmaInfo").msgclass
    ProjectSourceFrontendReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceFrontendReport").msgclass
    ProjectSourceFrontendReport::Progress = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceFrontendReport.Progress").msgclass
    ProjectSourceFrontendReport::Error = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceFrontendReport.Error").msgclass
    ProjectSourceFrontendReport::Complete = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceFrontendReport.Complete").msgclass
  end
end
