<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/project_export.proto

namespace Schema\V1\Report;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Report.Progress</code>
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
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type float $percentage
     *     @type string $message
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\ProjectExport::initOnce();
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

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Progress::class, \Schema\V1\Report_Progress::class);

