import React, { Fragment } from 'react';
import { Grid, Paper, List } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';
import Popup from 'reactjs-popup';
import firebase from '../../firebase.js';
import Ingredients from "../../Components/Ingredients";
import { green, white } from 'material-ui/colors/red';
import './RecipeDisplay.css';

const styles = {
    greenText: {
        color: "#00FF00",
    },
    defaultText: {
    },
    btnDislikeButton: {
        background: "red", // Red background 
        border: "#00FF00", // Green border
        color: "white", // White text
        cursor: "pointer" // Pointer/hand icon
    },
    btnLikeButton: {
        background: "#4CAF50", // Green background
        border: "#00FF00", // Green border
        color: "white", // White text
        cursor: "pointer" // Pointer/hand icon
    },
    Paper: {
        padding: 20,
        margin: 10,
        height: 230,
        overflowY: 'auto'
    }
}
let haveIngredient = false;

export default ({
    displayedRecipes,
    foods,
    saveClick,
    removeClick,
    ingredientsOwned
}) =>
    <Grid item sm>
        <Paper style = {styles.Paper}>
            {displayedRecipes.map((recipes) =>
                // If it is print that recipe
                <Popup
                    trigger={<ListItem button className = "recipe_list">{recipes.name}{recipes.disliked ? " This recipe is disliked" : null}</ListItem>}
                        modal
                >
                    <div className = "recipe_display">
                        <div className = "btnGroupButton">
                        <Popup
                            trigger={<button className = "perference_button"
                                    id="btnSaveRecipe"
                                    style={styles.btnLikeButton}
                                onClick={() => saveClick(recipes.name)}
                            >Save This Recipe
                                                    </button>}
                            position="bottom center"
                            on="hover"
                        >
                            Save recipe to your list
                        </Popup>
                        <Popup
                            trigger={
                                <button className = "perference_button"
                                    id="btnDislikeRecipe"
                                        style={styles.btnDislikeButton}
                                    onClick={() => removeClick(recipes.name)}
                                >Remove this recipe
                                                    </button>}
                            position="bottom center"
                            on="hover"
                        >
                            Makes recipe not show up in searches. Can remove from this list in profile
                        </Popup>
                            </div>
                        <h1>Steps</h1>
                                <ol>
                                    {recipes.steps.map((eachStep) =>
                                        <li>{eachStep}</li>
                                    )}
                                </ol>
                                <h2>Ingredients Required</h2>
                                <ul id="ingredientsDisplayed">
                            {recipes.ingredients.map((recipeIngredient) => (
                                haveIngredient = false,
                                foods.map((ingredient) =>
                                    recipeIngredient.name.includes(ingredient)
                                        ?
                                        haveIngredient = true
                                        : null
                                ),
                                <li id={recipeIngredient.name + "recipe"} style={haveIngredient ? styles.greenText : styles.defaultText}>{recipeIngredient.name} 
                                    <br />
                                    Quantity:{recipeIngredient.quantity}</li>
                            )
                                    )}
                        </ul>
                    </div>
                </Popup>
            )}
        </Paper>
    </Grid>