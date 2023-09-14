<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source.proto

namespace Schema\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.ProjectSourceReport</code>
 */
class ProjectSourceReport extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 project_generate_queue_id = 1;</code>
     */
    protected $project_generate_queue_id = 0;
    /**
     * Generated from protobuf field <code>int32 project_id = 2;</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>int32 project_source_id = 3;</code>
     */
    protected $project_source_id = 0;
    protected $state;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $project_generate_queue_id
     *     @type int $project_id
     *     @type int $project_source_id
     *     @type \Schema\V2\ProjectSourceReport\Progress $progress
     *     @type \Schema\V2\ProjectSourceReport\Complete $complete
     *     @type \Schema\V2\ProjectSourceReport\Error $error
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\ProjectSource::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 project_generate_queue_id = 1;</code>
     * @return int
     */
    public function getProjectGenerateQueueId()
    {
        return $this->project_generate_queue_id;
    }

    /**
     * Generated from protobuf field <code>int32 project_generate_queue_id = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setProjectGenerateQueueId($var)
    {
        GPBUtil::checkInt32($var);
        $this->project_generate_queue_id = $var;

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
     * Generated from protobuf field <code>int32 project_source_id = 3;</code>
     * @return int
     */
    public function getProjectSourceId()
    {
        return $this->project_source_id;
    }

    /**
     * Generated from protobuf field <code>int32 project_source_id = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setProjectSourceId($var)
    {
        GPBUtil::checkInt32($var);
        $this->project_source_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSourceReport.Progress progress = 4;</code>
     * @return \Schema\V2\ProjectSourceReport\Progress|null
     */
    public function getProgress()
    {
        return $this->readOneof(4);
    }

    public function hasProgress()
    {
        return $this->hasOneof(4);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSourceReport.Progress progress = 4;</code>
     * @param \Schema\V2\ProjectSourceReport\Progress $var
     * @return $this
     */
    public function setProgress($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\ProjectSourceReport\Progress::class);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSourceReport.Complete complete = 5;</code>
     * @return \Schema\V2\ProjectSourceReport\Complete|null
     */
    public function getComplete()
    {
        return $this->readOneof(5);
    }

    public function hasComplete()
    {
        return $this->hasOneof(5);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSourceReport.Complete complete = 5;</code>
     * @param \Schema\V2\ProjectSourceReport\Complete $var
     * @return $this
     */
    public function setComplete($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\ProjectSourceReport\Complete::class);
        $this->writeOneof(5, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSourceReport.Error error = 6;</code>
     * @return \Schema\V2\ProjectSourceReport\Error|null
     */
    public function getError()
    {
        return $this->readOneof(6);
    }

    public function hasError()
    {
        return $this->hasOneof(6);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.ProjectSourceReport.Error error = 6;</code>
     * @param \Schema\V2\ProjectSourceReport\Error $var
     * @return $this
     */
    public function setError($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\ProjectSourceReport\Error::class);
        $this->writeOneof(6, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getState()
    {
        return $this->whichOneof("state");
    }

}

