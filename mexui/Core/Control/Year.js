mexui.util.createControlConstructor('Year', false, function(window, x, y, w, h, text, styles, callback)
{
	mexui.Control.TextInput.call(this, window, x, y, w, h, text, this.linkControlStyles('Year', styles), callback, false, false);
	
	this.maxYearOffset			= 10;
	
	this.minYearCallback		= ()=>{ return 1900; };
	this.maxYearCallback		= ()=>{ return new Date().getFullYear() + this.maxYearOffset; }
});
mexui.util.extend(mexui.Control.Year, mexui.Control.TextInput);

// model
mexui.Control.Year.prototype.validateInputCallback = function(e, character)
{
	var _int = this.getTextWithNewCharacter(character);
	
	if(!mexui.util.isPositiveInt(_int))
		return false;
	
	//if(_int < this.minYearCallback() || _int > this.maxYearCallback())
	//	return false;
	
	return true;
};