<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: report.proto

namespace GPBMetadata;

class Report
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
report.proto	schema.v1"�
Report
project_name (	

project_id (.
progress (2.schema.v1.Report.ProgressH .
complete (2.schema.v1.Report.CompleteH (
error (2.schema.v1.Report.ErrorH 9
project_export (2.schema.v1.Report.ProjectExportH;
project_preview (2 .schema.v1.Report.ProjectPreviewH/
Progress

percentage (
message (	
Complete
path (	
ProjectExport

id (
ProjectPreview

id (
Error
message (	B
stateB
report_typebproto3'
        , true);

        static::$is_initialized = true;
    }
}

