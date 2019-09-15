# App Structure

## Composition

### Main components
The app's main components are:

1. MenuBar
2. SideMenu
3. Grid
4. TextContainer
5. ListContainer
6. ProjectCardList
7. ProjectCard

### Sub-components

1. MenuItem
2. SideBar
3. Row and Column
4. Container
5. Image
6. Modal
7. TransitionalPortal

## Layout
The components are placed in the following way:

    <MenuBar/>
    <SideMenu>
        <Grid>
            <Grid.Row>
                <TextContainer/>
            <Grid.Row/>
            <Grid.Row>
                <ListContainer/>
            <Grid.Row/>
                .
                .
                .
            <Grid.Row>
                <ProjectCardList>
                    <ProjectCard/>
                        .
                        .
                        .
                <ProjectCardList/>
            <Grid.Row/>
        <Grid/>
    <SideMenu/>

> The  ... meaning that there are more than one of the previous element

## Interaction and State Management
The components are places in a "waterfall" like way since the main components that are displayed are basically interactive items. Once clicked, they trigger the children or sub-components.

