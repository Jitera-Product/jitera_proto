<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/project_import.proto

namespace Schema\V1\ProjectAnalysisReport;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.ProjectAnalysisReport.Progress</code>
 */
class Progress extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>float percentage = 1;</code>
     */
    protected $percentage = 0.0;
    /**
     * Generated from protobuf field <code>string message = 2;</code>
     */
    protected $message = '';
    /**
     * Generated from protobuf field <code>.schema.v1.ProjectAnalysisReport.Payload payload = 3;</code>
     */
    protected $payload = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type float $percentage
     *     @type string $message
     *     @type \Schema\V1\ProjectAnalysisReport\Payload $payload
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\ProjectImport::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>float percentage = 1;</code>
     * @return float
     */
    public function getPercentage()
    {
        return $this->percentage;
    }

    /**
     * Generated from protobuf field <code>float percentage = 1;</code>
     * @param float $var
     * @return $this
     */
    public function setPercentage($var)
    {
        GPBUtil::checkFloat($var);
        $this->percentage = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string message = 2;</code>
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Generated from protobuf field <code>string message = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setMessage($var)
    {
        GPBUtil::checkString($var, True);
        $this->message = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ProjectAnalysisReport.Payload payload = 3;</code>
     * @return \Schema\V1\ProjectAnalysisReport\Payload|null
     */
    public function getPayload()
    {
        return $this->payload;
    }

    public function hasPayload()
    {
        return isset($this->payload);
    }

    public function clearPayload()
    {
        unset($this->payload);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ProjectAnalysisReport.Payload payload = 3;</code>
     * @param \Schema\V1\ProjectAnalysisReport\Payload $var
     * @return $this
     */
    public function setPayload($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ProjectAnalysisReport\Payload::class);
        $this->payload = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Progress::class, \Schema\V1\ProjectAnalysisReport_Progress::class);

