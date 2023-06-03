<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\WebNodeProps;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.WebNodeProps.TableColumn</code>
 */
class TableColumn extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.schema.v1.RenderMolecule molecule = 1;</code>
     */
    protected $molecule = null;
    /**
     * Generated from protobuf field <code>bool sortable = 2;</code>
     */
    protected $sortable = false;
    /**
     * Generated from protobuf field <code>bool filterable = 3;</code>
     */
    protected $filterable = false;
    /**
     * Generated from protobuf field <code>int32 column_index = 4;</code>
     */
    protected $column_index = 0;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable column_name = 5;</code>
     */
    private $column_name;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable column_path = 6;</code>
     */
    private $column_path;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Schema\V1\RenderMolecule $molecule
     *     @type bool $sortable
     *     @type bool $filterable
     *     @type int $column_index
     *     @type array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $column_name
     *     @type array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $column_path
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RenderMolecule molecule = 1;</code>
     * @return \Schema\V1\RenderMolecule|null
     */
    public function getMolecule()
    {
        return $this->molecule;
    }

    public function hasMolecule()
    {
        return isset($this->molecule);
    }

    public function clearMolecule()
    {
        unset($this->molecule);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RenderMolecule molecule = 1;</code>
     * @param \Schema\V1\RenderMolecule $var
     * @return $this
     */
    public function setMolecule($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\RenderMolecule::class);
        $this->molecule = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool sortable = 2;</code>
     * @return bool
     */
    public function getSortable()
    {
        return $this->sortable;
    }

    /**
     * Generated from protobuf field <code>bool sortable = 2;</code>
     * @param bool $var
     * @return $this
     */
    public function setSortable($var)
    {
        GPBUtil::checkBool($var);
        $this->sortable = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool filterable = 3;</code>
     * @return bool
     */
    public function getFilterable()
    {
        return $this->filterable;
    }

    /**
     * Generated from protobuf field <code>bool filterable = 3;</code>
     * @param bool $var
     * @return $this
     */
    public function setFilterable($var)
    {
        GPBUtil::checkBool($var);
        $this->filterable = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 column_index = 4;</code>
     * @return int
     */
    public function getColumnIndex()
    {
        return $this->column_index;
    }

    /**
     * Generated from protobuf field <code>int32 column_index = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setColumnIndex($var)
    {
        GPBUtil::checkInt32($var);
        $this->column_index = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable column_name = 5;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getColumnName()
    {
        return $this->column_name;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable column_name = 5;</code>
     * @param array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setColumnName($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeVariable::class);
        $this->column_name = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable column_path = 6;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getColumnPath()
    {
        return $this->column_path;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeVariable column_path = 6;</code>
     * @param array<\Schema\V1\NodeVariable>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setColumnPath($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeVariable::class);
        $this->column_path = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(TableColumn::class, \Schema\V1\WebNodeProps_TableColumn::class);

