<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\Table\ColumnValidationOption;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Table.ColumnValidationOption.FileValidation</code>
 */
class FileValidation extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bool single = 1;</code>
     */
    protected $single = false;
    /**
     * Generated from protobuf field <code>repeated string content_types = 2;</code>
     */
    private $content_types;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type bool $single
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $content_types
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bool single = 1;</code>
     * @return bool
     */
    public function getSingle()
    {
        return $this->single;
    }

    /**
     * Generated from protobuf field <code>bool single = 1;</code>
     * @param bool $var
     * @return $this
     */
    public function setSingle($var)
    {
        GPBUtil::checkBool($var);
        $this->single = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string content_types = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getContentTypes()
    {
        return $this->content_types;
    }

    /**
     * Generated from protobuf field <code>repeated string content_types = 2;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setContentTypes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->content_types = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(FileValidation::class, \Schema\V1\Table_ColumnValidationOption_FileValidation::class);

