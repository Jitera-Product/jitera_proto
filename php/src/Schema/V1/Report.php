<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: report.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Report</code>
 */
class Report extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string project_name = 1;</code>
     */
    protected $project_name = '';
    /**
     * Generated from protobuf field <code>int32 project_id = 2;</code>
     */
    protected $project_id = 0;
    protected $state;
    protected $report_type;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $project_name
     *     @type int $project_id
     *     @type \Schema\V1\Report\Progress $progress
     *     @type \Schema\V1\Report\Complete $complete
     *     @type \Schema\V1\Report\Error $error
     *     @type \Schema\V1\Report\ProjectExport $project_export
     *     @type \Schema\V1\Report\ProjectPreview $project_preview
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Report::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string project_name = 1;</code>
     * @return string
     */
    public function getProjectName()
    {
        return $this->project_name;
    }

    /**
     * Generated from protobuf field <code>string project_name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setProjectName($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 2;</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkInt32($var);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.Progress progress = 3;</code>
     * @return \Schema\V1\Report\Progress|null
     */
    public function getProgress()
    {
        return $this->readOneof(3);
    }

    public function hasProgress()
    {
        return $this->hasOneof(3);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.Progress progress = 3;</code>
     * @param \Schema\V1\Report\Progress $var
     * @return $this
     */
    public function setProgress($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Report\Progress::class);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.Complete complete = 4;</code>
     * @return \Schema\V1\Report\Complete|null
     */
    public function getComplete()
    {
        return $this->readOneof(4);
    }

    public function hasComplete()
    {
        return $this->hasOneof(4);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.Complete complete = 4;</code>
     * @param \Schema\V1\Report\Complete $var
     * @return $this
     */
    public function setComplete($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Report\Complete::class);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.Error error = 5;</code>
     * @return \Schema\V1\Report\Error|null
     */
    public function getError()
    {
        return $this->readOneof(5);
    }

    public function hasError()
    {
        return $this->hasOneof(5);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.Error error = 5;</code>
     * @param \Schema\V1\Report\Error $var
     * @return $this
     */
    public function setError($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Report\Error::class);
        $this->writeOneof(5, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.ProjectExport project_export = 6;</code>
     * @return \Schema\V1\Report\ProjectExport|null
     */
    public function getProjectExport()
    {
        return $this->readOneof(6);
    }

    public function hasProjectExport()
    {
        return $this->hasOneof(6);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.ProjectExport project_export = 6;</code>
     * @param \Schema\V1\Report\ProjectExport $var
     * @return $this
     */
    public function setProjectExport($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Report\ProjectExport::class);
        $this->writeOneof(6, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.ProjectPreview project_preview = 7;</code>
     * @return \Schema\V1\Report\ProjectPreview|null
     */
    public function getProjectPreview()
    {
        return $this->readOneof(7);
    }

    public function hasProjectPreview()
    {
        return $this->hasOneof(7);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Report.ProjectPreview project_preview = 7;</code>
     * @param \Schema\V1\Report\ProjectPreview $var
     * @return $this
     */
    public function setProjectPreview($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Report\ProjectPreview::class);
        $this->writeOneof(7, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getState()
    {
        return $this->whichOneof("state");
    }

    /**
     * @return string
     */
    public function getReportType()
    {
        return $this->whichOneof("report_type");
    }

}
