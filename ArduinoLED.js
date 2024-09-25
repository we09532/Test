const extension = {
  id: 'arduinoLEDControl',
  name: 'Arduino LED Control',
  
  // Define getInfo function
  getInfo: function () {
    return {
      id: this.id,
      name: this.name,
      blocks: [
        {
          opcode: 'turnLEDOn',
          text: 'turn LED ON',
          blockType: 'command',
          arguments: {
            IP: {
              type: 'string',
              defaultValue: '192.168.0.38'
            }
          }
        },
        {
          opcode: 'turnLEDOff',
          text: 'turn LED OFF',
          blockType: 'command',
          arguments: {
            IP: {
              type: 'string',
              defaultValue: '192.168.0.38'
            }
          }
        }
      ]
    };
  },

  turnLEDOn: async function (args) {
    const ip = args.IP;
    try {
      const response = await fetch(`http://${ip}/H`);
      if (response.ok) {
        console.log("LED turned ON!");
      } else {
        console.error("Failed to turn LED ON.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  turnLEDOff: async function (args) {
    const ip = args.IP;
    try {
      const response = await fetch(`http://${ip}/L`);
      if (response.ok) {
        console.log("LED turned OFF!");
      } else {
        console.error("Failed to turn LED OFF.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

// Register the extension
Scratch.extensions.register(extension);
