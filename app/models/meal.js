class Meal {
  /* 
    params:
      affordAbility: 付出这道菜品的能力
      complexity: 制作这道菜品的复杂程度
      imageURL: 菜品的展示图片
      duration: 制作菜品所需的时长
      ingredients: 制作菜品所需的原料
      steps: 制作菜品所需的步骤
      isGlutenFree: 是否无麸质
      isVegan: 是否是严格素食主义者（不吃肉、奶、蛋等, 有的不用动物产品）
      isVegetarian: 是否是素食主义者
      islactoseFree： 是否无乳糖成分
  */
  constructor(
    id,
    categoryIds,
    title,
    affordAbility,
    complexity,
    imageURL,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    islactoseFree
  ) {
    this.id = id
    this.categoryIds = categoryIds
    this.title = title
    this.affordAbility = affordAbility
    this.complexity = complexity
    this.imageURL = imageURL
    this.duration = duration
    this.ingredients = ingredients
    this.steps = steps
    this.isGlutenFree = isGlutenFree
    this.isVegan = isVegan
    this.isVegetarian = isVegetarian
    this.islactoseFree = islactoseFree
  }
}

export default Meal;