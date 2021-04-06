import {Command, CommandProvider, QuestionOptions} from "@tsed/cli-core";

export interface HelloCmdContext {

}

@Command({
  name: "hello",
  description: "Hello world",
  args: {
  },
  options: {
  }
})
export class HelloCmd implements CommandProvider {
  /**
   *  Ask questions with Inquirer. Return an empty array or don't implement the method to skip this step
   */
  async $prompt(initialOptions: Partial<HelloCmdContext>): Promise<QuestionOptions> {
    return [];
  }

  /**
   * This method is called after the $prompt to create / map inputs to a proper context for the next step
   */
  $mapContext(ctx: Partial<HelloCmdContext>): HelloCmdContext {
    return {
      ...ctx
      // map something, based on ctx
    };
  }

  /**
   *  This step run your tasks with Listr module
   */
  async $exec(ctx: HelloCmdContext): Promise<any> {
    return [
      {
        title: "Do something",
        task: () => {
          console.log('HELLO')
        }
      }
    ];
  }
}