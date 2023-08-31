<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/project_export.proto

namespace Schema\V1\Report;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Report.Complete</code>
 */
class Complete extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string path = 1;</code>
     */
    protected $path = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $path
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\ProjectExport::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string path = 1;</code>
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Generated from protobuf field <code>string path = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setPath($var)
    {
        GPBUtil::checkString($var, True);
        $this->path = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Complete::class, \Schema\V1\Report_Complete::class);

