<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source.proto

namespace Schema\V2\BlockDiff;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.BlockDiff.Block</code>
 */
class Block extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string node_id = 2;</code>
     */
    protected $node_id = '';
    protected $state;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $node_id
     *     @type \Schema\V2\BlockDiff\Block\Addition $addition
     *     @type \Schema\V2\BlockDiff\Block\Modification $modification
     *     @type \Schema\V2\BlockDiff\Block\Deletion $deletion
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\ProjectSource::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>int32 id = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkInt32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string node_id = 2;</code>
     * @return string
     */
    public function getNodeId()
    {
        return $this->node_id;
    }

    /**
     * Generated from protobuf field <code>string node_id = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setNodeId($var)
    {
        GPBUtil::checkString($var, True);
        $this->node_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.BlockDiff.Block.Addition addition = 3;</code>
     * @return \Schema\V2\BlockDiff\Block\Addition|null
     */
    public function getAddition()
    {
        return $this->readOneof(3);
    }

    public function hasAddition()
    {
        return $this->hasOneof(3);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.BlockDiff.Block.Addition addition = 3;</code>
     * @param \Schema\V2\BlockDiff\Block\Addition $var
     * @return $this
     */
    public function setAddition($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\BlockDiff\Block\Addition::class);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.BlockDiff.Block.Modification modification = 4;</code>
     * @return \Schema\V2\BlockDiff\Block\Modification|null
     */
    public function getModification()
    {
        return $this->readOneof(4);
    }

    public function hasModification()
    {
        return $this->hasOneof(4);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.BlockDiff.Block.Modification modification = 4;</code>
     * @param \Schema\V2\BlockDiff\Block\Modification $var
     * @return $this
     */
    public function setModification($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\BlockDiff\Block\Modification::class);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.BlockDiff.Block.Deletion deletion = 5;</code>
     * @return \Schema\V2\BlockDiff\Block\Deletion|null
     */
    public function getDeletion()
    {
        return $this->readOneof(5);
    }

    public function hasDeletion()
    {
        return $this->hasOneof(5);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.BlockDiff.Block.Deletion deletion = 5;</code>
     * @param \Schema\V2\BlockDiff\Block\Deletion $var
     * @return $this
     */
    public function setDeletion($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\BlockDiff\Block\Deletion::class);
        $this->writeOneof(5, $var);

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

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Block::class, \Schema\V2\BlockDiff_Block::class);

