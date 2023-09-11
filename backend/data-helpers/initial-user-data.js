exports.newUserObj = (id) => {
  return {
    id
  }
}

const categories = ['body', 'anim', 'natu'];
const categoryLevels = {
  body: [
    { level: 0, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 1, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 2, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 3, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 4, variants: ['a', 'b', 'c', 'd', 'e']},
  ],
  anim: [
    { level: 0, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 1, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 2, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 3, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 4, variants: ['a', 'b', 'c', 'd', 'e']},
  ],
  natu: [
    { level: 0, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 1, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 2, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 3, variants: ['a', 'b', 'c', 'd', 'e']},
    { level: 4, variants: ['a', 'b', 'c', 'd', 'e']},
  ],
}

exports.createInitialCategoryStatus = () => {
  const result = [];

  categories.forEach(category => {
    const newCategory = {
      category,
      levels: []
    }

    categoryLevels[category].forEach(lev => {
      const newLevel = {
        level: lev.level,
        enabled: lev.level === 0,
        variants: []
      }

      lev.variants.forEach(variant => {
        const newVariant = {
          variant,
          enabled: lev.level === 0 && variant === 'a',
          status: 0,
        }
        newLevel.variants.push(newVariant);
      })
      newCategory.levels.push(newLevel);
    })
    result.push(newCategory);
  })

  return { status: result };
}



// const initialCategoryStatus = [
//   {
//     "category": "foo1",
//     "levels": [
//       {
//         "level": 1,
//         "enabled": true,
//         "variants": [
//           {
//             "variant": "a",
//             "enabled": true,
//             "status": 60
//           },
//           {
//             "variant": "b",
//             "enabled": true,
//             "status": 0
//           },
//           {
//             "variant": "c",
//             "enabled": false,
//             "status": 0
//           }
//         ]
//       },
//       {
//         "level": 2,
//         "enabled": false,
//         "variants": [
//           {
//             "variant": "a",
//             "enabled": true,
//             "status": 60
//           },
//           {
//             "variant": "b",
//             "enabled": true,
//             "status": 0
//           },
//           {
//             "variant": "c",
//             "enabled": false,
//             "status": 0
//           }
//         ]
//       }
//     ]
//   }
// ]
