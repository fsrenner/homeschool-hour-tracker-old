module.exports ={
    "getHours": "SELECT reading, language, math, history, science, art, "
                        + "music, bible, pe, life, core, non_core, total"
                        + " FROM hours"
                        + " WHERE user = ? and name = ?",
    "updateHours": "UPDATE hours "
                    + "SET reading = ?, language = ?, math = ?, history = ?, "
                    + "science = ?, art = ?, music = ?, bible = ?, pe = ?, "
                    + "life = ?, core = ?, non_core = ?, total = ? "
                    + "WHERE name = ?"
};