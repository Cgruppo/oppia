# State Editor: Interactions #

Every state in Oppia contains an interaction that allows a reader to communicate with Oppia. Examples of such interactions are text input fields, multiple-choice inputs, an embeddable and clickable Google Map, and so on.

The simplest interaction is the 'Continue' button. The only thing that the reader can do with this interaction is to click on it. This will transition the reader to another state, as specified by the exploration creator.

However, most interactions permit the reader to be more expressive than this. The general pattern is as follows:

  * A reader sends a response to Oppia by submitting an answer to the interaction. This communication may be triggered by clicking a button, typing a character, hitting a key, and so on. The trigger is defined by the developer of the interaction.

  * Oppia matches the reader's response against a set of [rules](Rules.md). It takes the feedback attached to the first rule that applies to the reader's input, and displays it to the reader. It also changes the reader's state based on the instructions attached to that rule. If no rule applies to the reader's input, the default rule is used.

You can find out more about rules on [this page](Rules.md).

## Specifying a widget ##

To specify an interactive widget, click "Change type" in the right column under the 'Interaction' heading.

<img src='http://wiki.oppia.googlecode.com/git/images/interactiveWidget.png' width='300'>

This will open up a dialog box from which you can select a new interaction from the ones that are available.<br>
<br>
<b>Warning:</b> At the moment, changing the interaction type will delete all existing rules and feedback (except the default rule).<br>
<br>
<h2>Customizing an interaction</h2>

Some interactions expose a set of parameters that can be customized. For example, the Text interaction allows customization of the default placeholder text.<br>
<br>
Note that these widget parameters are distinct from <a href='Parameters.md'>exploration parameters</a>, which are attached to the reader's session and remain with the reader throughout the exploration. Widget parameters are only used in the display of the widget, and are not persisted between states.<br>
<br>
To customize a widget, click "Customize" below the interactivity heading, and, in the dialog box that pops up, edit the values that you would like to customize.<br>
<br>
<h2>Other options</h2>

You can ask Oppia to use the same interactive widget for multiple states. For example, if the current widget is an interactive map, and you would like the reader's clicks on this map to remain visible even after the reader has moved to a new state, you can enable this by selecting the "Reuse the previous state's interaction, if possible" checkbox. Note that this setting only takes effect if this state and the reader's previous state both use the same interactive widget. If this checkbox is left empty, then the interactive widget will be replaced by a brand-new one each time the reader enters this state, and any previous content entered by the reader will be discarded.<br>
<br>
<h2>Writing custom widgets</h2>

If you would like to use a widget that does not already exist, you can write your own, but in order to do this you will need to know how to write HTML code (and probably JavaScript as well). More instructions can be found <a href='CreatingInteractions.md'>here</a>. If you believe that the interaction you write is likely to be useful more generally, please consider <a href='Contributing.md'>contributing</a> it to our source tree so that others can make use of it.<br>
<br>
Alternatively, you could file an issue on our <a href='http://code.google.com/p/oppia/issues/list'>issue tracker</a>, describing what type of interaction you would like, and what you would like it to do. The advantage of this is that someone might be able to help you create such a interaction; the disadvantage is that it is not guaranteed that this will happen in a timely fashion (or at all). However, if your interactions is likely to be generally useful to other users as well, the chances of it getting built are probably higher.<br>
<br>
Next: <a href='Rules.md'>Rules</a>