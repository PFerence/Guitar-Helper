//var fret = prompt("Which fret are you at?");
//var noteWant = prompt("Which note do you want?");

function Strings (first, second, third, fourth, fifth, sixth) { 
    this.first = buildString(first);
    this.second = buildString(second);
    this.third = buildString(third);
    this.fourth = buildString(fourth);
    this.fifth = buildString(fifth);
    this.sixth = buildString(sixth);
}

function buildString (startNote) {
    var notes = ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"];
    for (var i=0; i < notes.length; i++) {
	if (notes[i] === startNote) {
	    var first = notes.splice(0, i);
	    notes.push.apply(notes, first);
	    return notes;
	}
    }
}

function findNote (fret, note) {
    var strings = new Strings("E","A","D","G","B","E");
    for (var i=fret-4; i < fret+4; i++) {
	if (strings.first[i] === note) {
	    console.log(note + " at fret " + i+ " on first string");
	}
    }
    for (var i=fret-4; i < fret+4; i++) {
	if(strings.second[i] === note) {
	    console.log(note + " at fret " + i + " on second string");
	}
    }
    for (var i=fret-4; i < fret+4; i++) {
	if(strings.third[i] === note) {
	    console.log(note + " at fret " + i + " on third string");
	}
    }
    for (var i=fret-4; i < fret+4; i++) {
	if(strings.fourth[i] === note) {
	    console.log(note + " at fret " + i + " on fourth string");
	}
    }
    for (var i=fret-4; i < fret+4; i++) {
	if(strings.fifth[i] === note) {
	    console.log(note + " at fret " + i + " on fifth string");
	}
    }
    for (var i=fret-4; i < fret+4; i++) {
	if(strings.sixth[i] === note) {
	    console.log(note + " at fret " + i + " on sixth string");
	}
    }
}


findNote(0, "B");