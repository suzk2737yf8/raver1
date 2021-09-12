/////////////////////////////////////////////////////////
// Config for the JMusicBot                            //
/////////////////////////////////////////////////////////
// Any line starting with // is ignored                //
// You MUST set the token and owner                    //
// All other items have defaults if you don't set them //
// Open in Notepad++ for best results                  //
/////////////////////////////////////////////////////////


// This sets the token for the bot to log in with
// This MUST be a bot token (user tokens will not work)
// If you don't know how to get a bot token, please see the guide here:
// https://github.com/jagrosh/MusicBot/wiki/Getting-a-Bot-Token

token = ODg2NTcxNzgzNzgyODA1NTA1.YT3iUA.sC9pHOKusrKGAOYHF1HbXmxhBnE


// This sets the owner of the bot
// This needs to be the owner's ID (a 17-18 digit number)
// https://github.com/jagrosh/MusicBot/wiki/Finding-Your-User-ID

owner = 315795566946942977


// This sets the prefix for the bot
// The prefix is used to control the commands
// If you use !!, the play command will be !!play
// If you do not set this, the prefix will be a mention of the bot (@Botname play)
// If you make this blank, the bot will not use a prefix

prefix = "@mention"


// If you set this, it modifies the default game of the bot
// Set this to NONE to have no game
// Set this to DEFAULT to use the default game
// You can make the game "Playing X", "Listening to X", or "Watching X"
// where X is the title. If you don't include an action, it will use the
// default of "Playing"

game = "DEFAULT"


// If you set this, it will modify the default status of bot
// Valid values: ONLINE IDLE DND INVISIBLE

status = ONLINE


// If you set this to true, the bot will list the title of the song it is currently playing in its
// "Playing" status. Note that this will ONLY work if the bot is playing music on ONE guild;
// if the bot is playing on multiple guilds, this will not work.

songinstatus=false


// If you set this, the bot will also use this prefix in addition to
// the one provided above

altprefix = "NONE"


// If you set these, it will change the various emojis

success = "🎶"
warning = "💡"
error = "🚫"
loading = "⌚"
searching = "🔎"


// If you set this, you change the word used to view the help.
// For example, if you set the prefix to !! and the help to cmds, you would type
// !!cmds to see the help text

help = help


// If you set this, the "nowplaying" command will show youtube thumbnails
// Note: If you set this to true, the nowplaying boxes will NOT refresh
// This is because refreshing the boxes causes the image to be reloaded
// every time it refreshes.

npimages = false


// If you set this, the bot will not leave a voice channel after it finishes a queue.
// Keep in mind that being connected to a voice channel uses additional bandwith,
// so this option is not recommended if bandwidth is a concern.

stayinchannel = true


// This sets the maximum amount of seconds any track loaded can be. If not set or set
// to any number less than or equal to zero, there is no maximum time length. This time
// restriction applies to songs loaded from any source.

maxtime = 0


// This sets an alternative folder to be used as the Playlists folder
// This can be a relative or absolute path

playlistsfolder = "Playlists"


// By default, the bot will DM the owner if the bot is running and a new version of the bot
// becomes available. Set this to false to disable this feature.

updatealerts=true


// Changing this changes the lyrics provider
// Currently available providers: "A-Z Lyrics", "Genius", "MusicMatch"
// At the time of writing, I would recommend sticking with A-Z Lyrics or MusicMatch,
// as Genius tends to have a lot of non-song results and you might get something 
// completely unrelated to what you want.
// If you are interested in contributing a provider, please see
// https://github.com/jagrosh/JLyrics

lyrics.default = "A-Z Lyrics"


// These settings allow you to configure custom aliases for all commands.
// Multiple aliases may be given, separated by commas.
//
// Example 1: Giving command "play" the alias "p":
// play = [ p ]
//
// Example 2: Giving command "search" the aliases "yts" and "find":
// search = [ yts, find ]

aliases {
  // General commands
  settings = [ status ]

  // Music commands
  lyrics = []
  nowplaying = [ np, current ]
  play = []
  playlists = [ pls ]
  queue = [ list ]
  remove = [ delete ]
  scsearch = []
  search = [ ytsearch ]
  shuffle = []
  skip = [ voteskip ]

  // Admin commands
  prefix = [ setprefix ]
  setdj = []
  settc = []
  setvc = []

  // DJ Commands
  forceremove = [ forcedelete, modremove, moddelete, modelete ]
  forceskip = [ modskip ]
  movetrack = [ move ]
  pause = []
  playnext = []
  repeat = []
  skipto = [ jumpto ]
  stop = []
  volume = [ vol ]
}

// If you set this to true, it will enable the eval command for the bot owner. This command
// allows the bot owner to run arbitrary code from the bot's account.
//
// WARNING:
// This command can be extremely dangerous. If you don't know what you're doing, you could
// cause horrific problems on your Discord server or on whatever computer this bot is running
// on. Never run this command unless you are completely positive what you are running.
//
// DO NOT ENABLE THIS IF YOU DON'T KNOW WHAT THIS DOES OR HOW TO USE IT
// IF SOMEONE ASKS YOU TO ENABLE THIS, THERE IS AN 11/10 CHANCE THEY ARE TRYING TO SCAM YOU

eval=false
