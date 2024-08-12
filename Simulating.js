// Name: Simulating
// ID: d780sim
// Description: run event blocks in the events category from blocks!
// By: dinnerbone8780 <https://scratch.mit.edu/users/dinnerbone78780/> 
// License: MIT AND LGPL-3.0
(function(Scratch) {
    'use strict';
    if (!Scratch.extensions.unsandboxed) { throw new Error('the simulating extension has to be run unsandboxed'); };
    class simulator123456 {
      getInfo() {
        return {
          id: 'd780sim',
          name: 'simulating',
          blocks: [
            {
                opcode: 'runFlag',
                blockType: Scratch.BlockType.COMMAND,
                text: 'simulate green flag click'
            },
            {
                opcode: 'clickSprite',
                blockType: Scratch.BlockType.COMMAND,
                text: 'simulate sprite click'
            },
            {
                opcode: 'keyClick',
                blockType: Scratch.BlockType.COMMAND,
                text: 'simulate all keys getting pressed'
            },
            {
                opcode: 'backSwitch',
                blockType: Scratch.BlockType.COMMAND,
                text: 'simulate backdrop switching'
            },
            {
                opcode: 'board',
                blockType: Scratch.BlockType.COMMAND,
                text: 'run all boardcasts'
            }
          ]
        };
      }
      runFlag(args, util) {
          util.startHats('event_whenflagclicked');
      }
      clickSprite(args, util) {
          util.startHats('event_whenthisspriteclicked');
      }
      keyClick(args, util) {
          util.startHats('event_whenkeypressed');
      }
      backSwitch(args, util) {
          util.startHats('event_whenbackdropswitchesto');
      }
      board(args, util) {
          util.startHats('event_whenbroadcastreceived');
      }
    }
    Scratch.extensions.register(new simulator123456());
  })(Scratch);
