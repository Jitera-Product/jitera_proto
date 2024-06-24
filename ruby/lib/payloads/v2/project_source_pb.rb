# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'


descriptor_data = "\n\x17v2/project_source.proto\x12\tschema.v2\x1a\x1cgoogle/protobuf/struct.proto\x1a\x11v1/payloads.proto\"_\n\x0eGenerateSource\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04type\x18\x02 \x01(\t\x12*\n\x04\x64\x61ta\x18\x03 \x01(\x0b\x32\x17.google.protobuf.StructH\x00\x88\x01\x01\x42\x07\n\x05_data\"\x86\x06\n\rProjectSource\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x35\n\tframework\x18\x03 \x01(\x0e\x32\".schema.v2.ProjectSource.Framework\x12-\n\x05layer\x18\x04 \x01(\x0e\x32\x1e.schema.v2.ProjectSource.Layer\x12\r\n\x05\x66iles\x18\x05 \x01(\t\x12\x33\n\x08platform\x18\x06 \x01(\x0e\x32!.schema.v2.ProjectSource.Platform\x1a\xab\x01\n\x05Table\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x36\n\x07\x63olumns\x18\x03 \x03(\x0b\x32%.schema.v2.ProjectSource.Table.Column\x12\x13\n\x06locked\x18\x04 \x01(\x08H\x00\x88\x01\x01\x1a\x30\n\x06\x43olumn\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0c\n\x04type\x18\x03 \x01(\tB\t\n\x07_locked\x1aZ\n\x08Relation\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0e\n\x06\x63olumn\x18\x02 \x01(\t\x12\r\n\x05table\x18\x03 \x01(\t\x12\x15\n\rrelated_table\x18\x04 \x01(\t\x12\x0c\n\x04type\x18\x05 \x01(\t\"|\n\tFramework\x12\x19\n\x15\x46RAMEWORK_UNSPECIFIED\x10\x00\x12\n\n\x06NEXTJS\x10\x01\x12\x08\n\x04VITE\x10\x02\x12\n\n\x06NUXTJS\x10\x03\x12\n\n\x06NESTJS\x10\x04\x12\x07\n\x03ROR\x10\x05\x12\x0b\n\x07LARAVEL\x10\x06\x12\x10\n\x0cREACT_NATIVE\x10\x07\"G\n\x05Layer\x12\x15\n\x11LAYER_UNSPECIFIED\x10\x00\x12\x0b\n\x07\x42\x41\x43KEND\x10\x01\x12\x0c\n\x08\x46RONTEND\x10\x02\x12\x0c\n\x08MONOREPO\x10\x03\"Z\n\x08Platform\x12\x18\n\x14PLATFORM_UNSPECIFIED\x10\x00\x12\x07\n\x03WEB\x10\x01\x12\n\n\x06MOBILE\x10\x02\x12\x0b\n\x07\x44\x45SKTOP\x10\x03\x12\x12\n\x0e\x43ROSS_PLATFORM\x10\x04\"G\n\x0bPullRequest\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0e\n\x06number\x18\x02 \x01(\x05\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x0e\n\x06status\x18\x04 \x01(\t\"\x9d\x01\n\x03Git\x12\x0c\n\x04repo\x18\x03 \x01(\t\x12\r\n\x05owner\x18\x04 \x01(\t\x12\x0e\n\x06\x62ranch\x18\x05 \x01(\t\x12\r\n\x05token\x18\x06 \x01(\t\x12\x15\n\rjitera_branch\x18\x07 \x01(\t\x12\x15\n\rtarget_branch\x18\x08 \x01(\t\x12,\n\x0cpull_request\x18\t \x01(\x0b\x32\x16.schema.v2.PullRequest\"\xb7\x03\n\x15ProjectSourceCreation\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x30\n\x0eproject_source\x18\x02 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12+\n\timport_by\x18\x05 \x01(\x0e\x32\x13.schema.v2.ImportByH\x01\x88\x01\x01\x12<\n\x06\x61\x63tion\x18\x06 \x01(\x0e\x32\'.schema.v2.ProjectSourceCreation.ActionH\x02\x88\x01\x01\x12\x15\n\x0bsource_path\x18\x03 \x01(\tH\x00\x12\x1d\n\x03git\x18\x04 \x01(\x0b\x32\x0e.schema.v2.GitH\x00\"\x84\x01\n\x06\x41\x63tion\x12\x0e\n\nINDEX_CODE\x10\x00\x12\x10\n\x0c\x41NALYZE_CODE\x10\x01\x12\x0f\n\x0b\x43ODE_TO_ERD\x10\x02\x12\x10\n\x0cREMOVE_INDEX\x10\x03\x12\x0f\n\x0b\x46ORCE_INDEX\x10\x04\x12\x0c\n\x08RE_INDEX\x10\x05\x12\x16\n\x12MERGE_UC_ERD_INDEX\x10\x06\x42\x08\n\x06sourceB\x0c\n\n_import_byB\t\n\x07_action\"\x8f\x05\n\tERDConfig\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x30\n\x0eproject_source\x18\x02 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12\x1b\n\x03git\x18\x03 \x01(\x0b\x32\x0e.schema.v2.Git\x12+\n\timport_by\x18\x06 \x01(\x0e\x32\x13.schema.v2.ImportByH\x01\x88\x01\x01\x12-\n\x06import\x18\x04 \x01(\x0b\x32\x1b.schema.v2.ERDConfig.ImportH\x00\x12+\n\x05local\x18\x05 \x01(\x0b\x32\x1a.schema.v2.ERDConfig.LocalH\x00\x1aq\n\x05Local\x12\x13\n\x0bsource_path\x18\x01 \x01(\t\x12 \n\x06tables\x18\x02 \x03(\x0b\x32\x10.schema.v1.Table\x12\x31\n\x0fproject_plugins\x18\x03 \x03(\x0b\x32\x18.schema.v2.ProjectPlugin\x1a;\n\x06Import\x12\x31\n\x06tables\x18\x02 \x03(\x0b\x32!.schema.v2.ERDConfig.TableChanged\x1a\x64\n\x0cTableChanged\x12\x33\n\x04type\x18\x01 \x01(\x0e\x32%.schema.v2.ERDConfig.TableChangedType\x12\x1f\n\x05table\x18\x02 \x01(\x0b\x32\x10.schema.v1.Table\"Y\n\x10TableChangedType\x12 \n\x1cTABLECHANGEDTYPE_UNSPECIFIED\x10\x00\x12\t\n\x05\x41\x44\x44\x45\x44\x10\x01\x12\x0b\n\x07UPDATED\x10\x02\x12\x0b\n\x07\x44\x45LETED\x10\x03\x42\x08\n\x06sourceB\x0c\n\n_import_by\"\xf0\x03\n\x14\x42usinessLogicChanges\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12.\n\x06tables\x18\x02 \x03(\x0b\x32\x1e.schema.v2.ProjectSource.Table\x12\x34\n\trelations\x18\x03 \x03(\x0b\x32!.schema.v2.ProjectSource.Relation\x12\x30\n\x0eproject_source\x18\x04 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12(\n\nblock_diff\x18\x05 \x01(\x0b\x32\x14.schema.v2.BlockDiff\x12\x1b\n\x03git\x18\x06 \x01(\x0b\x32\x0e.schema.v2.Git\x12+\n\timport_by\x18\x07 \x01(\x0e\x32\x13.schema.v2.ImportByH\x00\x88\x01\x01\x12\x37\n\x0fgenerate_source\x18\x08 \x01(\x0b\x32\x19.schema.v2.GenerateSourceH\x01\x88\x01\x01\x12\x19\n\x0cusers_prompt\x18\t \x01(\tH\x02\x88\x01\x01\x12\"\n\x1ais_non_failed_regeneration\x18\x0b \x01(\x08\x42\x0c\n\n_import_byB\x12\n\x10_generate_sourceB\x0f\n\r_users_prompt\"\x9b\x06\n\tBlockDiff\x12\x12\n\nproject_id\x18\x01 \x01(\x05\x12\n\n\x02id\x18\x03 \x01(\x05\x12\x0f\n\x07node_id\x18\x04 \x01(\t\x12/\n\x07\x63ontent\x18\x05 \x01(\x0b\x32\x1e.schema.v2.BlockDiff.BlockBody\x12*\n\x06\x62locks\x18\x06 \x03(\x0b\x32\x1a.schema.v2.BlockDiff.Block\x1a\xce\x03\n\x05\x42lock\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0f\n\x07node_id\x18\x02 \x01(\t\x12\x37\n\x08\x61\x64\x64ition\x18\x03 \x01(\x0b\x32#.schema.v2.BlockDiff.Block.AdditionH\x00\x12?\n\x0cmodification\x18\x04 \x01(\x0b\x32\'.schema.v2.BlockDiff.Block.ModificationH\x00\x12\x37\n\x08\x64\x65letion\x18\x05 \x01(\x0b\x32#.schema.v2.BlockDiff.Block.DeletionH\x00\x1a;\n\x08\x41\x64\x64ition\x12/\n\x07\x63ontent\x18\x01 \x01(\x0b\x32\x1e.schema.v2.BlockDiff.BlockBody\x1ar\n\x0cModification\x12\x30\n\x08\x64\x65letion\x18\x01 \x01(\x0b\x32\x1e.schema.v2.BlockDiff.BlockBody\x12\x30\n\x08\x61\x64\x64ition\x18\x02 \x01(\x0b\x32\x1e.schema.v2.BlockDiff.BlockBody\x1a;\n\x08\x44\x65letion\x12/\n\x07\x63ontent\x18\x01 \x01(\x0b\x32\x1e.schema.v2.BlockDiff.BlockBodyB\x07\n\x05state\x1a\xae\x01\n\tBlockBody\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x12\n\nblock_type\x18\x02 \x01(\t\x12\x16\n\x0eparent_node_id\x18\x03 \x01(\t\x12(\n\x07\x63ontent\x18\x04 \x03(\x0b\x32\x17.google.protobuf.Struct\x12+\n\nproperties\x18\x05 \x01(\x0b\x32\x17.google.protobuf.Struct\x12\x10\n\x08\x63hildren\x18\x06 \x03(\t\"\xe6\x03\n\nApiChanges\x12\x30\n\x0eproject_source\x18\x01 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12(\n\nblock_diff\x18\x02 \x01(\x0b\x32\x14.schema.v2.BlockDiff\x12.\n\x06tables\x18\x03 \x03(\x0b\x32\x1e.schema.v2.ProjectSource.Table\x12\x34\n\trelations\x18\x04 \x03(\x0b\x32!.schema.v2.ProjectSource.Relation\x12!\n\x19project_generate_queue_id\x18\x05 \x01(\x05\x12\x1b\n\x03git\x18\x06 \x01(\x0b\x32\x0e.schema.v2.Git\x12+\n\timport_by\x18\x07 \x01(\x0e\x32\x13.schema.v2.ImportByH\x00\x88\x01\x01\x12\x37\n\x0fgenerate_source\x18\x08 \x01(\x0b\x32\x19.schema.v2.GenerateSourceH\x01\x88\x01\x01\x12\x19\n\x0cusers_prompt\x18\t \x01(\tH\x02\x88\x01\x01\x12\"\n\x1ais_non_failed_regeneration\x18\x0b \x01(\x08\x42\x0c\n\n_import_byB\x12\n\x10_generate_sourceB\x0f\n\r_users_prompt\"\xe8\x03\n\x13ProjectSourceReport\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x19\n\x11project_source_id\x18\x03 \x01(\x05\x12\x13\n\x0btoken_usage\x18\x04 \x01(\x05\x12-\n\x07payload\x18\x08 \x01(\x0b\x32\x17.google.protobuf.StructH\x01\x88\x01\x01\x12;\n\x08progress\x18\x05 \x01(\x0b\x32\'.schema.v2.ProjectSourceReport.ProgressH\x00\x12;\n\x08\x63omplete\x18\x06 \x01(\x0b\x32\'.schema.v2.ProjectSourceReport.CompleteH\x00\x12\x35\n\x05\x65rror\x18\x07 \x01(\x0b\x32$.schema.v2.ProjectSourceReport.ErrorH\x00\x1a@\n\x08Progress\x12\x12\n\npercentage\x18\x01 \x01(\x05\x12\x0f\n\x07message\x18\x02 \x01(\t\x12\x0f\n\x07payload\x18\x03 \x01(\t\x1a\x18\n\x05\x45rror\x12\x0f\n\x07message\x18\x01 \x01(\t\x1a\x19\n\x08\x43omplete\x12\r\n\x05\x66iles\x18\x04 \x01(\tB\x07\n\x05stateB\n\n\x08_payload\"\x8c\x04\n\x0eUseCaseRemoval\x12\x30\n\x0eproject_source\x18\x01 \x01(\x0b\x32\x18.schema.v2.ProjectSource\x12!\n\x19project_generate_queue_id\x18\x02 \x01(\x05\x12\x1b\n\x03git\x18\x03 \x01(\x0b\x32\x0e.schema.v2.Git\x12+\n\timport_by\x18\x04 \x01(\x0e\x32\x13.schema.v2.ImportByH\x00\x88\x01\x01\x12\x38\n\x0fuse_case_blocks\x18\x05 \x03(\x0b\x32\x1f.schema.v2.UseCaseRemoval.Block\x12>\n\x15\x62usiness_logic_blocks\x18\x06 \x03(\x0b\x32\x1f.schema.v2.UseCaseRemoval.Block\x12\x33\n\napi_blocks\x18\x07 \x03(\x0b\x32\x1f.schema.v2.UseCaseRemoval.Block\x1a\x9d\x01\n\x05\x42lock\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0f\n\x07node_id\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x12\n\nblock_type\x18\x04 \x01(\t\x12\x16\n\x0eparent_node_id\x18\x05 \x01(\t\x12+\n\nproperties\x18\x06 \x01(\x0b\x32\x17.google.protobuf.Struct\x12\x10\n\x08\x63hildren\x18\x07 \x03(\tB\x0c\n\n_import_by\"w\n\rProjectPlugin\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x0e\n\x06status\x18\x04 \x01(\t\x12<\n\x15project_plugin_tables\x18\x05 \x03(\x0b\x32\x1d.schema.v2.ProjectPluginTable\"A\n\x12ProjectPluginTable\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x1f\n\x05table\x18\x02 \x01(\x0b\x32\x10.schema.v1.Table*>\n\x08ImportBy\x12\n\n\x06github\x10\x00\x12\n\n\x06notion\x10\x01\x12\x0f\n\x0bgoogle_docs\x10\x02\x12\t\n\x05\x66igma\x10\x03\x62\x06proto3"

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
    ["google.protobuf.Struct", "google/protobuf/struct.proto"],
    ["schema.v1.Table", "v1/payloads.proto"],
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
    GenerateSource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.GenerateSource").msgclass
    ProjectSource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSource").msgclass
    ProjectSource::Table = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSource.Table").msgclass
    ProjectSource::Table::Column = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSource.Table.Column").msgclass
    ProjectSource::Relation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSource.Relation").msgclass
    ProjectSource::Framework = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSource.Framework").enummodule
    ProjectSource::Layer = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSource.Layer").enummodule
    ProjectSource::Platform = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSource.Platform").enummodule
    PullRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.PullRequest").msgclass
    Git = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.Git").msgclass
    ProjectSourceCreation = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceCreation").msgclass
    ProjectSourceCreation::Action = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceCreation.Action").enummodule
    ERDConfig = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ERDConfig").msgclass
    ERDConfig::Local = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ERDConfig.Local").msgclass
    ERDConfig::Import = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ERDConfig.Import").msgclass
    ERDConfig::TableChanged = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ERDConfig.TableChanged").msgclass
    ERDConfig::TableChangedType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ERDConfig.TableChangedType").enummodule
    BusinessLogicChanges = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogicChanges").msgclass
    BlockDiff = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BlockDiff").msgclass
    BlockDiff::Block = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BlockDiff.Block").msgclass
    BlockDiff::Block::Addition = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BlockDiff.Block.Addition").msgclass
    BlockDiff::Block::Modification = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BlockDiff.Block.Modification").msgclass
    BlockDiff::Block::Deletion = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BlockDiff.Block.Deletion").msgclass
    BlockDiff::BlockBody = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BlockDiff.BlockBody").msgclass
    ApiChanges = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ApiChanges").msgclass
    ProjectSourceReport = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceReport").msgclass
    ProjectSourceReport::Progress = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceReport.Progress").msgclass
    ProjectSourceReport::Error = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceReport.Error").msgclass
    ProjectSourceReport::Complete = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectSourceReport.Complete").msgclass
    UseCaseRemoval = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.UseCaseRemoval").msgclass
    UseCaseRemoval::Block = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.UseCaseRemoval.Block").msgclass
    ProjectPlugin = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPlugin").msgclass
    ProjectPluginTable = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectPluginTable").msgclass
    ImportBy = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ImportBy").enummodule
  end
end
