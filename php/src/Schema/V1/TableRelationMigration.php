<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.TableRelationMigration</code>
 */
class TableRelationMigration extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string foreign_key = 1;</code>
     */
    protected $foreign_key = '';
    /**
     * Generated from protobuf field <code>string relation_type = 2;</code>
     */
    protected $relation_type = '';
    /**
     * Generated from protobuf field <code>bool required = 3;</code>
     */
    protected $required = false;
    /**
     * Generated from protobuf field <code>string uuid = 4;</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>string table_definition_uuid = 5;</code>
     */
    protected $table_definition_uuid = '';
    /**
     * Generated from protobuf field <code>string related_table_uuid = 6;</code>
     */
    protected $related_table_uuid = '';
    /**
     * Generated from protobuf field <code>optional bool custom_foreign_key = 7;</code>
     */
    protected $custom_foreign_key = null;
    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableChange table_definition = 8;</code>
     */
    protected $table_definition = null;
    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableChange related_table = 9;</code>
     */
    protected $related_table = null;
    /**
     * Generated from protobuf field <code>int32 id = 10;</code>
     */
    protected $id = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $foreign_key
     *     @type string $relation_type
     *     @type bool $required
     *     @type string $uuid
     *     @type string $table_definition_uuid
     *     @type string $related_table_uuid
     *     @type bool $custom_foreign_key
     *     @type \Schema\V1\CreateTableChange $table_definition
     *     @type \Schema\V1\CreateTableChange $related_table
     *     @type int $id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string foreign_key = 1;</code>
     * @return string
     */
    public function getForeignKey()
    {
        return $this->foreign_key;
    }

    /**
     * Generated from protobuf field <code>string foreign_key = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setForeignKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->foreign_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string relation_type = 2;</code>
     * @return string
     */
    public function getRelationType()
    {
        return $this->relation_type;
    }

    /**
     * Generated from protobuf field <code>string relation_type = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setRelationType($var)
    {
        GPBUtil::checkString($var, True);
        $this->relation_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool required = 3;</code>
     * @return bool
     */
    public function getRequired()
    {
        return $this->required;
    }

    /**
     * Generated from protobuf field <code>bool required = 3;</code>
     * @param bool $var
     * @return $this
     */
    public function setRequired($var)
    {
        GPBUtil::checkBool($var);
        $this->required = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string uuid = 4;</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Generated from protobuf field <code>string uuid = 4;</code>
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
     * Generated from protobuf field <code>string table_definition_uuid = 5;</code>
     * @return string
     */
    public function getTableDefinitionUuid()
    {
        return $this->table_definition_uuid;
    }

    /**
     * Generated from protobuf field <code>string table_definition_uuid = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setTableDefinitionUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->table_definition_uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string related_table_uuid = 6;</code>
     * @return string
     */
    public function getRelatedTableUuid()
    {
        return $this->related_table_uuid;
    }

    /**
     * Generated from protobuf field <code>string related_table_uuid = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setRelatedTableUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->related_table_uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool custom_foreign_key = 7;</code>
     * @return bool
     */
    public function getCustomForeignKey()
    {
        return isset($this->custom_foreign_key) ? $this->custom_foreign_key : false;
    }

    public function hasCustomForeignKey()
    {
        return isset($this->custom_foreign_key);
    }

    public function clearCustomForeignKey()
    {
        unset($this->custom_foreign_key);
    }

    /**
     * Generated from protobuf field <code>optional bool custom_foreign_key = 7;</code>
     * @param bool $var
     * @return $this
     */
    public function setCustomForeignKey($var)
    {
        GPBUtil::checkBool($var);
        $this->custom_foreign_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableChange table_definition = 8;</code>
     * @return \Schema\V1\CreateTableChange|null
     */
    public function getTableDefinition()
    {
        return $this->table_definition;
    }

    public function hasTableDefinition()
    {
        return isset($this->table_definition);
    }

    public function clearTableDefinition()
    {
        unset($this->table_definition);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableChange table_definition = 8;</code>
     * @param \Schema\V1\CreateTableChange $var
     * @return $this
     */
    public function setTableDefinition($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\CreateTableChange::class);
        $this->table_definition = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableChange related_table = 9;</code>
     * @return \Schema\V1\CreateTableChange|null
     */
    public function getRelatedTable()
    {
        return $this->related_table;
    }

    public function hasRelatedTable()
    {
        return isset($this->related_table);
    }

    public function clearRelatedTable()
    {
        unset($this->related_table);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableChange related_table = 9;</code>
     * @param \Schema\V1\CreateTableChange $var
     * @return $this
     */
    public function setRelatedTable($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\CreateTableChange::class);
        $this->related_table = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 id = 10;</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>int32 id = 10;</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkInt32($var);
        $this->id = $var;

        return $this;
    }

}

