<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.CreateTableNextRecord</code>
 */
class CreateTableNextRecord extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string uuid = 2;</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>string comment = 3;</code>
     */
    protected $comment = '';
    /**
     * Generated from protobuf field <code>repeated .schema.v1.MigrationColumnDefinition column_definitions = 4;</code>
     */
    private $column_definitions;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $uuid
     *     @type string $comment
     *     @type array<\Schema\V1\MigrationColumnDefinition>|\Google\Protobuf\Internal\RepeatedField $column_definitions
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string name = 1;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string uuid = 2;</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Generated from protobuf field <code>string uuid = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string comment = 3;</code>
     * @return string
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Generated from protobuf field <code>string comment = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setComment($var)
    {
        GPBUtil::checkString($var, True);
        $this->comment = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.MigrationColumnDefinition column_definitions = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getColumnDefinitions()
    {
        return $this->column_definitions;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.MigrationColumnDefinition column_definitions = 4;</code>
     * @param array<\Schema\V1\MigrationColumnDefinition>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setColumnDefinitions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\MigrationColumnDefinition::class);
        $this->column_definitions = $arr;

        return $this;
    }

}
