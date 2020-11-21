module.exports = function(sequelize, DataTypes) {
  var ReadyKit = sequelize.define("ReadyKit", {
    currentUserName: DataTypes.STRING,
    water: DataTypes.BOOLEAN,
    non_perishable_food: DataTypes.BOOLEAN,
    radio: DataTypes.BOOLEAN,
    batteries: DataTypes.BOOLEAN,
    flashlight: DataTypes.BOOLEAN,
    first_aid_kit: DataTypes.BOOLEAN,
    whistle: DataTypes.BOOLEAN,
    dust_mask: DataTypes.BOOLEAN,
    moist_towlettes: DataTypes.BOOLEAN,
    garbadge_bags: DataTypes.BOOLEAN,
    wrench: DataTypes.BOOLEAN,
    can_opener: DataTypes.BOOLEAN,
    local_map: DataTypes.BOOLEAN,
    cash: DataTypes.BOOLEAN,
    medications: DataTypes.BOOLEAN,
  });
  return ReadyKit;
};
