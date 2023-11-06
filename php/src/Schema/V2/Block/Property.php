<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/block.proto

namespace Schema\V2\Block;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.Block.Property</code>
 */
class Property extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional string use_case_id = 1;</code>
     */
    protected $use_case_id = null;
    /**
     * Generated from protobuf field <code>optional string category = 2;</code>
     */
    protected $category = null;
    /**
     * Generated from protobuf field <code>optional int32 level = 3;</code>
     */
    protected $level = null;
    /**
     * Generated from protobuf field <code>optional string text_color = 4;</code>
     */
    protected $text_color = null;
    /**
     * Generated from protobuf field <code>optional string background_color = 5;</code>
     */
    protected $background_color = null;
    /**
     * Generated from protobuf field <code>optional string text_alignment = 6;</code>
     */
    protected $text_alignment = null;
    /**
     * Generated from protobuf field <code>optional int32 table_width = 7;</code>
     */
    protected $table_width = null;
    /**
     * Generated from protobuf field <code>optional bool has_column_header = 8;</code>
     */
    protected $has_column_header = null;
    /**
     * Generated from protobuf field <code>optional bool has_row_header = 9;</code>
     */
    protected $has_row_header = null;
    /**
     * Generated from protobuf field <code>optional bool unsupported = 10;</code>
     */
    protected $unsupported = null;
    /**
     * Generated from protobuf field <code>optional bool is_toggleable = 11;</code>
     */
    protected $is_toggleable = null;
    /**
     * Generated from protobuf field <code>optional bool ai_generated = 12;</code>
     */
    protected $ai_generated = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $use_case_id
     *     @type string $category
     *     @type int $level
     *     @type string $text_color
     *     @type string $background_color
     *     @type string $text_alignment
     *     @type int $table_width
     *     @type bool $has_column_header
     *     @type bool $has_row_header
     *     @type bool $unsupported
     *     @type bool $is_toggleable
     *     @type bool $ai_generated
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\Block::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional string use_case_id = 1;</code>
     * @return string
     */
    public function getUseCaseId()
    {
        return isset($this->use_case_id) ? $this->use_case_id : '';
    }

    public function hasUseCaseId()
    {
        return isset($this->use_case_id);
    }

    public function clearUseCaseId()
    {
        unset($this->use_case_id);
    }

    /**
     * Generated from protobuf field <code>optional string use_case_id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setUseCaseId($var)
    {
        GPBUtil::checkString($var, True);
        $this->use_case_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string category = 2;</code>
     * @return string
     */
    public function getCategory()
    {
        return isset($this->category) ? $this->category : '';
    }

    public function hasCategory()
    {
        return isset($this->category);
    }

    public function clearCategory()
    {
        unset($this->category);
    }

    /**
     * Generated from protobuf field <code>optional string category = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setCategory($var)
    {
        GPBUtil::checkString($var, True);
        $this->category = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional int32 level = 3;</code>
     * @return int
     */
    public function getLevel()
    {
        return isset($this->level) ? $this->level : 0;
    }

    public function hasLevel()
    {
        return isset($this->level);
    }

    public function clearLevel()
    {
        unset($this->level);
    }

    /**
     * Generated from protobuf field <code>optional int32 level = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setLevel($var)
    {
        GPBUtil::checkInt32($var);
        $this->level = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string text_color = 4;</code>
     * @return string
     */
    public function getTextColor()
    {
        return isset($this->text_color) ? $this->text_color : '';
    }

    public function hasTextColor()
    {
        return isset($this->text_color);
    }

    public function clearTextColor()
    {
        unset($this->text_color);
    }

    /**
     * Generated from protobuf field <code>optional string text_color = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setTextColor($var)
    {
        GPBUtil::checkString($var, True);
        $this->text_color = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string background_color = 5;</code>
     * @return string
     */
    public function getBackgroundColor()
    {
        return isset($this->background_color) ? $this->background_color : '';
    }

    public function hasBackgroundColor()
    {
        return isset($this->background_color);
    }

    public function clearBackgroundColor()
    {
        unset($this->background_color);
    }

    /**
     * Generated from protobuf field <code>optional string background_color = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setBackgroundColor($var)
    {
        GPBUtil::checkString($var, True);
        $this->background_color = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string text_alignment = 6;</code>
     * @return string
     */
    public function getTextAlignment()
    {
        return isset($this->text_alignment) ? $this->text_alignment : '';
    }

    public function hasTextAlignment()
    {
        return isset($this->text_alignment);
    }

    public function clearTextAlignment()
    {
        unset($this->text_alignment);
    }

    /**
     * Generated from protobuf field <code>optional string text_alignment = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setTextAlignment($var)
    {
        GPBUtil::checkString($var, True);
        $this->text_alignment = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional int32 table_width = 7;</code>
     * @return int
     */
    public function getTableWidth()
    {
        return isset($this->table_width) ? $this->table_width : 0;
    }

    public function hasTableWidth()
    {
        return isset($this->table_width);
    }

    public function clearTableWidth()
    {
        unset($this->table_width);
    }

    /**
     * Generated from protobuf field <code>optional int32 table_width = 7;</code>
     * @param int $var
     * @return $this
     */
    public function setTableWidth($var)
    {
        GPBUtil::checkInt32($var);
        $this->table_width = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool has_column_header = 8;</code>
     * @return bool
     */
    public function getHasColumnHeader()
    {
        return isset($this->has_column_header) ? $this->has_column_header : false;
    }

    public function hasHasColumnHeader()
    {
        return isset($this->has_column_header);
    }

    public function clearHasColumnHeader()
    {
        unset($this->has_column_header);
    }

    /**
     * Generated from protobuf field <code>optional bool has_column_header = 8;</code>
     * @param bool $var
     * @return $this
     */
    public function setHasColumnHeader($var)
    {
        GPBUtil::checkBool($var);
        $this->has_column_header = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool has_row_header = 9;</code>
     * @return bool
     */
    public function getHasRowHeader()
    {
        return isset($this->has_row_header) ? $this->has_row_header : false;
    }

    public function hasHasRowHeader()
    {
        return isset($this->has_row_header);
    }

    public function clearHasRowHeader()
    {
        unset($this->has_row_header);
    }

    /**
     * Generated from protobuf field <code>optional bool has_row_header = 9;</code>
     * @param bool $var
     * @return $this
     */
    public function setHasRowHeader($var)
    {
        GPBUtil::checkBool($var);
        $this->has_row_header = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool unsupported = 10;</code>
     * @return bool
     */
    public function getUnsupported()
    {
        return isset($this->unsupported) ? $this->unsupported : false;
    }

    public function hasUnsupported()
    {
        return isset($this->unsupported);
    }

    public function clearUnsupported()
    {
        unset($this->unsupported);
    }

    /**
     * Generated from protobuf field <code>optional bool unsupported = 10;</code>
     * @param bool $var
     * @return $this
     */
    public function setUnsupported($var)
    {
        GPBUtil::checkBool($var);
        $this->unsupported = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool is_toggleable = 11;</code>
     * @return bool
     */
    public function getIsToggleable()
    {
        return isset($this->is_toggleable) ? $this->is_toggleable : false;
    }

    public function hasIsToggleable()
    {
        return isset($this->is_toggleable);
    }

    public function clearIsToggleable()
    {
        unset($this->is_toggleable);
    }

    /**
     * Generated from protobuf field <code>optional bool is_toggleable = 11;</code>
     * @param bool $var
     * @return $this
     */
    public function setIsToggleable($var)
    {
        GPBUtil::checkBool($var);
        $this->is_toggleable = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool ai_generated = 12;</code>
     * @return bool
     */
    public function getAiGenerated()
    {
        return isset($this->ai_generated) ? $this->ai_generated : false;
    }

    public function hasAiGenerated()
    {
        return isset($this->ai_generated);
    }

    public function clearAiGenerated()
    {
        unset($this->ai_generated);
    }

    /**
     * Generated from protobuf field <code>optional bool ai_generated = 12;</code>
     * @param bool $var
     * @return $this
     */
    public function setAiGenerated($var)
    {
        GPBUtil::checkBool($var);
        $this->ai_generated = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Property::class, \Schema\V2\Block_Property::class);

