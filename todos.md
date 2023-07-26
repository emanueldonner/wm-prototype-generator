1. Setup:
   - [x] Setup Svelte project
       - [x] Initialize project with the Svelte template
       - [x] Review and understand the default project structure
   - [x] Install necessary dependencies (lodash, svelte-dnd-action, etc.)
       - [x] Identify necessary packages for the project
       - [x] Install packages using pnpm
   - [x] Setup file and folder structure
       - [x] Create a logical and efficient folder structure
       - [x] Create necessary files for components, styles, etc.

2. Canvas Component:
   - [ ] Implement Canvas component
       - [x] Define the component layout
       - [ ] Implement interactivity and state management
   - [ ] Add drag-and-drop functionality
       - [x] Use svelte-dnd-action for drag and drop
       - [ ] Implement necessary event handlers
   - [x] Implement addition of elements (templates and collections)
       - [ ] Define how elements are added to the canvas
       - [ ] Implement the addition functionality in code
   - [x] Implement deletion of elements
       - [ ] Define how elements are deleted from the canvas
       - [ ] Implement the deletion functionality in code
   - [x] Implement moving of elements
       - [ ] Define how elements are moved within the canvas
       - [ ] Implement the moving functionality in code
   - [x] Apply CSS styles
       - [ ] Define the visual design for the canvas
       - [ ] Implement the design using CSS
   - [x] Move save function to header
       - [ ] Define the new location for the save function
       - [ ] Move the save function in code
   - [x] Add ID and name to canvas state
       - [ ] Update the state structure to include ID and name
   - [x] Use UUIDs for canvas IDs
       - [ ] Generate UUIDs for each new canvas

3. Other Components:
   - [x] Implement ElementList component
       - [ ] Define the component layout
       - [ ] Implement interactivity and state management
   - [x] Implement InteractiveComponent
       - [ ] Define the component layout
       - [ ] Implement interactivity and state management
   - [x] Implement DynamicComponent
       - [ ] Define the component layout
       - [ ] Implement interactivity and state management
   - [x] Apply CSS styles to each component
       - [ ] Define the visual design for each component
       - [ ] Implement the design using CSS

4. Stores:
   - [x] Setup Svelte stores (`canvasElements`, `mode`, etc.)
       - [ ] Identify necessary stores for the project
       - [ ] Initialize stores with appropriate default values
   - [x] Implement logic for updating stores
       - [ ] Identify when and how each store should be updated
       - [ ] Implement the update logic in code

5. Server-side:
   - [x] Create Supabase database for storing canvas states
       - [ ] Define the database schema
       - [ ] Create the database using Supabase
   - [x] Implement database access layer for saving and loading canvas state
       - [ ] Define the interface for the database access layer
       - [ ] Implement the interface methods in code
   - [x] Implement server-side routes for saving and loading canvas state
       - [ ] Define the URL routes for each operation
       - [ ] Implement the routes using Express or a similar framework
   - [x] Implement error handling for database operations
       - [ ] Identify potential error scenarios
       - [ ] Implement appropriate error handling for each scenario

6. Complex Structures and Rules:
   - [ ] Implement support for nested elements in ElementList
       - [ ] Define how nesting should work in the ElementList
       - [ ] Implement nesting functionality in code
   - [ ] Implement rules to prevent certain elements from being nested within other elements
       - [ ] Define the rules for element nesting
       - [ ] Implement the rules in code
   - [ ] Add user interface for creating and managing complex structures
       - [ ] Design the user interface for managing complex structures
       - [ ] Implement the design in code

7. Preview and Export:
   - [x] Implement a preview section where users can see a rendered view of the canvas
       - [ ] Define what the preview should look like
       - [ ] Implement the preview in code
   - [ ] Refine preview section
       - [ ] Identify any issues or improvements for the preview section
       - [ ] Implement the improvements in code
   - [ ] Implement an export section where users can export the canvas in various formats (HTML, JSON, etc.)
       - [ ] Define what export options should be available
       - [ ] Implement the export functionality in code

8. Additional features:
   - [x] Implement loading of canvas state from server
       - [ ] Define how the canvas state is loaded from the server
       - [ ] Implement the loading functionality in code
   - [x] Add ability to switch between canvases
       - [ ] Define how the user can switch between canvases
       - [ ] Implement the switching functionality in code
   - [ ] Add ability to create new canvases
       - [ ] Define how the user can create a new canvas
       - [ ] Implement the creation functionality in code
   - [ ] Implement user interface for selecting, creating, and managing canvases
       - [ ] Design the user interface for canvas management
       - [ ] Implement the design in code
   - 8B. Main Site Configuration:
     - [ ] Main Header / Menu
       - [ ] Design the main header and menu
       - [ ] Implement the design in code
     - [ ] Toggle: is Microsite?
       - [ ] Define what the microsite toggle should do
       - [ ] Implement the toggle functionality in code

9. Testing and Deployment:
   - [ ] Test all functionality
       - [ ] Define test scenarios for each feature
       - [ ] Conduct the tests and record results
   - [ ] Fix any bugs or issues
       - [ ] Identify any bugs or issues found during testing
       - [ ] Implement fixes for each bug or issue
   - [ ] Prepare application for deployment
       - [ ] Identify any deployment-specific tasks (e.g., minification, transpiling)
       - [ ] Complete the deployment tasks
   - [ ] Deploy the application
       - [ ] Identify the deployment platform (e.g., Vercel, Netlify)
       - [ ] Deploy the application and confirm successful deployment