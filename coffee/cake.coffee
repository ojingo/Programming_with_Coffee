# my first CAKE file
# cake is a build system like RAKE but for coffeescript
# its written in coffeescript
# task(nameOfTask, descriptionOFTask, functionToExecute() )

task "greet", "Say hi to the nice people!", ->
	console.log "Hello CAKE!"

