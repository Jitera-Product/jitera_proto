<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.AddUniqColumn</code>
 */
class AddUniqColumn extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.schema.v1.MigrationColumnDefinition next_record = 7;</code>
     */
    protected $next_record = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Schema\V1\MigrationColumnDefinition $next_record
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.MigrationColumnDefinition next_record = 7;</code>
     * @return \Schema\V1\MigrationColumnDefinition|null
     */
    public function getNextRecord()
    {
        return $this->next_record;
    }

    public function hasNextRecord()
    {
        return isset($this->next_record);
    }

    public function clearNextRecord()
    {
        unset($this->next_record);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.MigrationColumnDefinition next_record = 7;</code>
     * @param \Schema\V1\MigrationColumnDefinition $var
     * @return $this
     */
    public function setNextRecord($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\MigrationColumnDefinition::class);
        $this->next_record = $var;

        return $this;
    }

}

