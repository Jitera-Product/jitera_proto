<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/block.proto

namespace Schema\V2\Block;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.Block.Style</code>
 */
class Style extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional bool bold = 1;</code>
     */
    protected $bold = null;
    /**
     * Generated from protobuf field <code>optional bool italic = 2;</code>
     */
    protected $italic = null;
    /**
     * Generated from protobuf field <code>optional bool underline = 3;</code>
     */
    protected $underline = null;
    /**
     * Generated from protobuf field <code>optional bool strike = 4;</code>
     */
    protected $strike = null;
    /**
     * Generated from protobuf field <code>optional bool code = 5;</code>
     */
    protected $code = null;
    /**
     * Generated from protobuf field <code>optional string textColor = 6;</code>
     */
    protected $textColor = null;
    /**
     * Generated from protobuf field <code>optional string backgroundColor = 7;</code>
     */
    protected $backgroundColor = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type bool $bold
     *     @type bool $italic
     *     @type bool $underline
     *     @type bool $strike
     *     @type bool $code
     *     @type string $textColor
     *     @type string $backgroundColor
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\Block::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional bool bold = 1;</code>
     * @return bool
     */
    public function getBold()
    {
        return isset($this->bold) ? $this->bold : false;
    }

    public function hasBold()
    {
        return isset($this->bold);
    }

    public function clearBold()
    {
        unset($this->bold);
    }

    /**
     * Generated from protobuf field <code>optional bool bold = 1;</code>
     * @param bool $var
     * @return $this
     */
    public function setBold($var)
    {
        GPBUtil::checkBool($var);
        $this->bold = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool italic = 2;</code>
     * @return bool
     */
    public function getItalic()
    {
        return isset($this->italic) ? $this->italic : false;
    }

    public function hasItalic()
    {
        return isset($this->italic);
    }

    public function clearItalic()
    {
        unset($this->italic);
    }

    /**
     * Generated from protobuf field <code>optional bool italic = 2;</code>
     * @param bool $var
     * @return $this
     */
    public function setItalic($var)
    {
        GPBUtil::checkBool($var);
        $this->italic = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool underline = 3;</code>
     * @return bool
     */
    public function getUnderline()
    {
        return isset($this->underline) ? $this->underline : false;
    }

    public function hasUnderline()
    {
        return isset($this->underline);
    }

    public function clearUnderline()
    {
        unset($this->underline);
    }

    /**
     * Generated from protobuf field <code>optional bool underline = 3;</code>
     * @param bool $var
     * @return $this
     */
    public function setUnderline($var)
    {
        GPBUtil::checkBool($var);
        $this->underline = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool strike = 4;</code>
     * @return bool
     */
    public function getStrike()
    {
        return isset($this->strike) ? $this->strike : false;
    }

    public function hasStrike()
    {
        return isset($this->strike);
    }

    public function clearStrike()
    {
        unset($this->strike);
    }

    /**
     * Generated from protobuf field <code>optional bool strike = 4;</code>
     * @param bool $var
     * @return $this
     */
    public function setStrike($var)
    {
        GPBUtil::checkBool($var);
        $this->strike = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool code = 5;</code>
     * @return bool
     */
    public function getCode()
    {
        return isset($this->code) ? $this->code : false;
    }

    public function hasCode()
    {
        return isset($this->code);
    }

    public function clearCode()
    {
        unset($this->code);
    }

    /**
     * Generated from protobuf field <code>optional bool code = 5;</code>
     * @param bool $var
     * @return $this
     */
    public function setCode($var)
    {
        GPBUtil::checkBool($var);
        $this->code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string textColor = 6;</code>
     * @return string
     */
    public function getTextColor()
    {
        return isset($this->textColor) ? $this->textColor : '';
    }

    public function hasTextColor()
    {
        return isset($this->textColor);
    }

    public function clearTextColor()
    {
        unset($this->textColor);
    }

    /**
     * Generated from protobuf field <code>optional string textColor = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setTextColor($var)
    {
        GPBUtil::checkString($var, True);
        $this->textColor = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string backgroundColor = 7;</code>
     * @return string
     */
    public function getBackgroundColor()
    {
        return isset($this->backgroundColor) ? $this->backgroundColor : '';
    }

    public function hasBackgroundColor()
    {
        return isset($this->backgroundColor);
    }

    public function clearBackgroundColor()
    {
        unset($this->backgroundColor);
    }

    /**
     * Generated from protobuf field <code>optional string backgroundColor = 7;</code>
     * @param string $var
     * @return $this
     */
    public function setBackgroundColor($var)
    {
        GPBUtil::checkString($var, True);
        $this->backgroundColor = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Style::class, \Schema\V2\Block_Style::class);

