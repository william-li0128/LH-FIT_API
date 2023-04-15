const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seed() {
  // reset database
  await prisma.exercise.deleteMany({})
  await prisma.user.deleteMany({})
  await prisma.routine.deleteMany({})
  await prisma.enrollment.deleteMany({})


  console.log('All previous records deleted.')

  await prisma.Exercise.create({
    data: {
      name: "Single-Leg Press",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Load the sled to an appropriate weight. Seat yourself on the machine, planting one foot on the platform in line with your hip. Your free foot can be placed on the ground. Maintain good spinal position with your head and chest up. Supporting the weight, fully extend the knee and unlock the sled. This will be your starting position. Lower the weight by flexing the hip and knee, continuing as far as flexibility allows. Do not allow your lumbar to take the load by moving your pelvis. At the bottom of the motion pause briefly and then return to the starting position by extending the hip and knee. Complete all repetitions for one leg before switching to the other."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Landmine twist",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Weighted pull-up",
      type: "strength",
      muscle: "lats",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip. You'll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position. Now, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing your shoulder blades back and down as you reach the top contracted position. After a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "T-Bar Row with Handle",
      type: "strength",
      muscle: "middle_back",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end. Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position. Assume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position. Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Palms-down wrist curl over bench",
      type: "strength",
      muscle: "forearms",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Start out by placing a barbell on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab the barbell with a pronated grip (palms down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting down by using your thighs as a resting position for your forearms. Your wrist can hang over your knees and the same movements as mentioned above can be performed. You can also use a dumbbell instead of a barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell front raise to lateral raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "In a standing position, hold a pair of dumbbells at your side. This will be your starting position. Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating. At the top of the exercise move the weights out in front of you, keeping your arms extended. Lower the weights with a controlled motion. On the next repetition, raise the weights in front of you to shoulder height before moving the weights laterally to your sides. Lower the weights to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline Hammer Curls",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Straight-bar wrist roll-up",
      type: "strength",
      muscle: "forearms",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Hold a barbell with both hands and your palms facing down; hands spaced about shoulder width. This will be your starting position. Alternating between each of your hands, perform the movement by extending the wrist as though you were rolling up a newspaper. Continue alternating back and forth until failure. Reverse the motion by flexing the wrist, rolling the opposite direction. Continue the alternating motion until failure."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Clean and press",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Assume a shoulder-width stance, with knees inside the arms. Now while keeping the back flat, bend at the knees and hips so that you can grab the bar with the arms fully extended and a pronated grip that is slightly wider than shoulder width. Point the elbows out to sides. The bar should be close to the shins. Position the shoulders over or slightly ahead of the bar. Establish a flat back posture. This will be your starting position. Begin to pull the bar by extending the knees. Move your hips forward and raise the shoulders at the same rate while keeping the angle of the back constant; continue to lift the bar straight up while keeping it close to your body. As the bar passes the knee, extend at the ankles, knees, and hips forcefully, similar to a jumping motion. As you do so, continue to guide the bar with your hands, shrugging your shoulders and using the momentum from your movement to pull the bar as high as possible. The bar should travel close to your body, and you should keep your elbows out. At maximum elevation, your feet should clear the floor and you should start to pull yourself under the bar. The mechanics of this could change slightly, depending on the weight used. You should descend into a squatting position as you pull yourself under the bar. As the bar hits terminal height, rotate your elbows around and under the bar. Rack the bar across the front of the shoulders while keeping the torso erect and flexing the hips and knees to absorb the weight of the bar. Stand to full height, holding the bar in the clean position. Without moving your feet, press the bar overhead as you exhale. Lower the bar under control ."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Triceps dip",
      type: "strength",
      muscle: "triceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Palms-up wrist curl over bench",
      type: "strength",
      muscle: "forearms",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Start out by placing a barbell on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab the barbell with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting down by using your thighs as a resting position for your forearms. Your wrist can hang over your knees and the same movements as mentioned above can be performed. You can also use a dumbbell instead of a barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Full Squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position. Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement. Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position. Repeat for the recommended amount of repetitions.  This type of squat allows a greater range of motion, and allows the trunk to maintain a more vertical position than other types of squats, due to foot position and the higher bar position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Deadlift",
      type: "strength",
      muscle: "hamstrings",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm palm-in dumbbell shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Start by having a dumbbell in one hand with your arm fully extended to the side using a neutral grip. Use your other arm to hold on to an incline bench to keep your balance. Your feet should be shoulder width apart from each other. Now slowly lift the dumbbell up until you create a 90 degree angle with your arm. Note: Your forearm should be perpendicular to the floor. Continue to maintain a neutral grip throughout the entire exercise. Slowly lift the dumbbell up until your arm is fully extended. This the starting position. While inhaling lower the weight down until your arm is at a 90 degree angle again. Feel the contraction for a second and then lift the weight back up towards the starting position while exhaling. Remember to hold on to the incline bench and keep your feet positioned to keep balance during the exercise. Repeat for the recommended amount of repetitions. Switch arms and repeat the exercise.  Variation: This exercise can be performed with dumbbells in each arm as the dumbbells will help to keep you balanced. This is another great way to add variety to your routines and keep them interesting."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Romanian Deadlift With Dumbbells",
      type: "strength",
      muscle: "hamstrings",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Begin in a standing position with a dumbbell in each hand. Ensure that your back is straight and stays that way for the duration of the exercise. Allow your arms to hang perpendicular to the floor, with the wrists pronated and the elbows pointed to your sides. This will be your starting position. Initiate the movement by flexing your hips, slowly pushing your butt as far back as you can. This should entail a horizontal movement of the hips, rather than a downward movement. The knees should only partially bend, and your weight should remain on your heels. Drive your butt back as far as you can, which should generate tension in your hamstrings as your hands approach knee level. Maintain an arch in your back throughout the exercise. When your hips cannot perform any further backward movement, pause, and then slowly return to the starting position by extending the hips."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Elbow plank",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bottoms Up",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Begin by lying on your back on the ground. Your legs should be straight and your arms at your side. This will be your starting position. To perform the movement, tuck the knees toward your chest by flexing the hips and knees. Following this, extend your legs directly above you so that they are perpendicular to the ground. Rotate and elevate your pelvis to raise your glutes from the floor. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm kettlebell push-press",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position. Dip your body by bending the knees, keeping your torso upright. Immediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body's momentum to move the weight. Lower the weight to perform the next repetition."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Suspended ab fall-out",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Adjust the straps so the handles are at an appropriate height, below waist level. Begin standing and grasping the handles. Lean into the straps, moving to an incline push-up position. This will be your starting position. Keeping your arms straight, lean further into the suspension straps, bringing your body closer to the ground, allowing your shoulders to extend, raising your arms up and over your head. Maintain a neutral spine and keep the rest of your body straight, your shoulders being the only joints allowed to move. Pause during the peak contraction, and then return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Military press",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Start by placing a barbell that is about chest high on a squat rack. Once you have selected the weights, grab the barbell using a pronated (palms facing forward) grip. Make sure to grip the bar wider than shoulder width apart from each other. Slightly bend the knees and place the barbell on your collar bone. Lift the barbell up keeping it lying on your chest. Take a step back and position your feet shoulder width apart from each other. Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position. Lower the bar down to the collarbone slowly as you inhale. Lift the bar back up to the starting position as you exhale. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting as those with lower back problems are better off performing this seated variety. The behind the neck variation is not recommended for people with shoulder problems as it can be hard on the rotator cuff due to the hyperextension created by bringing the bar behind the neck. Another option is to use dumbbells when performing this exercise for better isolation."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse-grip bent-over row",
      type: "strength",
      muscle: "middle_back",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Stand erect while holding a barbell with a supinated grip (palms facing up). Bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. While keeping the torso stationary, lift the barbell as you breathe out, keeping the elbows close to the body and not doing any force with the forearm other than holding the weights. On the top contracted position, squeeze the back muscles and hold for a second. Slowly lower the weight again to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Caution:  This exercise is not recommended for people with back problems. A Low Pulley Row is a better choice for people with back issues. Also, just like with the bent knee dead-lift, if you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more.  Variations: You can perform the same exercise using a pronated (palms facing out) grip or using dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
      type: "strength",
      muscle: "forearms",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Put a bench in front of a low pulley machine that has a barbell or EZ Curl attachment on it. Move the bench far enough away so that when you bring the handle to the top of your thighs tension is created on the cable due to the weight stack being moved up. Now hold the handle with both hands, palms up, using a shoulder-width grip. Step back and sit on the bench with your feet about shoulder width apart, firmly on the floor. Lean forward and place the forearms on your thighs with the back of your wrists over your knees. This will be your starting position. Lower the bar as far as possible, while inhaling and keeping a tight grip. Now curl the bar up as high as possible while contracting the forearms. Tip: Only the wrist should move; not the forearms. After a second contraction at the top go back to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: This exercise can be performed also with a single handle attachment (one arm at a time) or with free weights (barbells or dumbbells) using one arm and two arm variations."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Back extension",
      type: "strength",
      muscle: "lower_back",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads. Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back. Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed without a hyperextension bench, but in this case you will need a spotter. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-grip bench press",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Lie back on a flat bench. Using a close grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that - as opposed to a regular bench press - you keep the elbows close to the torso at all times in order to maximize triceps involvement. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to fall on your middle chest and nowhere else. Variations: This exercise can also be performed with an e-z bar using the inner handle as well as dumbbells, in which case the palms of the hands will be facing each other."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cocoons",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position. To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cross-Body Crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie flat on your back and bend your knees about 60 degrees. Keep your feet flat on the floor and place your hands loosely behind your head. This will be your starting position. Now curl up and bring your right elbow and shoulder across your body while bring your left knee in toward your left shoulder at the same time. Reach with your elbow and try to touch your knee. Exhale as you perform this movement. Tip: Try to bring your shoulder up towards your knee rather than just your elbow and remember that the key is to contract the abs as you perform the movement; not just to move the elbow. Now go back down to the starting position as you inhale and repeat with the left elbow and the right knee. Continue alternating in this manner until all prescribed repetitions are done.  Variation: You can also do all of your repetitions for one side and then switch to the other side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Flyes",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other. Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.  Variations: You may want to use a palms facing forward version for different stimulation."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Hammer Curls",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline dumbbell bench press",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other. Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width. Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position. Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest. Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells.  Variations: You can use several angles on the incline bench if the bench you are using is adjustable. Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Low-cable cross-over",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "To move into the starting position, place the pulleys at the low position, select the resistance to be used and grasp a handle in each hand. Step forward, gaining tension in the pulleys. Your palms should be facing forward, hands below the waist, and your arms straight. This will be your starting position. With a slight bend in your arms, draw your hands upward and toward the midline of your body. Your hands should come together in front of your chest, palms facing up. Return your arms back to the starting position after a brief pause."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline reverse crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Lie on your back on a decline bench and hold on to the top of the bench with both hands. Don't let your body slip down from this position. Hold your legs parallel to the floor using your abs to hold them there while keeping your knees and feet together. Tip: Your legs should be fully extended with a slight bend on the knee. This will be your starting position. While exhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the bench. At the end of this movement your knees will be touching your chest. Hold the contraction for a second and move your legs back to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations: You can do the movement on a flat surface and as you get more advanced you can use ankle weights."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Bench Press",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated barbell shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Sit on a Military Press Bench with a bar behind your head and either have a spotter give you the bar (better on the rotator cuff this way) or pick it up yourself carefully with a pronated grip (palms facing forward). Tip: Your grip should be wider than shoulder width and it should create a 90-degree angle between the forearm and the upper arm as the barbell goes down. Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position. Lower the bar down to the collarbone slowly as you inhale. Lift the bar back up to the starting position as you exhale. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed standing but those with lower back problems are better off performing this seated variety. The behind the neck variation is not recommended for people with shoulder problems as it can be hard on the rotator cuff due to the hyperextension created by bringing the bar behind the neck."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "EZ-bar spider curl",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off. Move to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench. Make sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench. Use your arms to grab the barbell with a supinated grip (palms facing up) at about shoulder width apart or slightly closer from each other. Slowly begin to lift the barbell upwards and exhale. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the barbell back to the starting position as your breathe in. . Repeat for the recommended amount of repetitions.  Variation: You can also use dumbbells when performing this exercise. Just make sure you place the dumbbells on the part of the preacher bench where you would normally sit properly."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine shrug",
      type: "strength",
      muscle: "traps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "To begin, set the bar height on the smith machine around the middle of your thighs. Once the correct height is chosen and the bar is loaded, grab the bar using a pronated grip (palms facing you) shoulder width apart from each other. Lift the barbell up and fully extend your arms with your back straight. This is the starting position. While exhaling, elevate the bar by raising your shoulders until they come close to touching your ears. Hold the contraction for a second before lowering the bar back down to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations:  This exercise can be performed using a squat rack with a barbell. However, be careful not to select a weight that is so heavy that it causes you to break good form as you do not have the support of the smith machine for this variation. Too much weight can harm your back. You can also use dumbbells to perform this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith Machine Calf Raise",
      type: "strength",
      muscle: "calves",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Once the correct height is chosen and the bar is loaded, step onto the plates with the balls of your feet and place the bar on the back of your shoulders. Take the bar with both hands facing forward. Rotate the bar to unrack it. This will be your starting position. Raise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down. Return slowly to the starting position as you breathe in while lowering your heels. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Pushups",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.  Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell walking lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Begin standing with your feet shoulder width apart and a barbell across your upper back. Step forward with one leg, flexing the knees to drop your hips. Descend until your rear knee nearly touches the ground. Your posture should remain upright, and your front knee should stay above the front foot. Drive through the heel of your lead foot and extend both knees to raise yourself back up. Step forward with your rear foot, repeating the lunge on the opposite leg."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Front Squats With Two Kettlebells",
      type: "strength",
      muscle: "quadriceps",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so. Looking straight ahead at all times, squat as low as you can and pause at the bottom. As you squat down, push your knees out. You should squat between your legs, keeping an upright torso, with your head and chest up. Rise back up by driving through your heels and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Spider crawl",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Begin in a prone position on the floor. Support your weight on your hands and toes, with your feet together and your body straight. Your arms should be bent to 90 degrees. This will be your starting position. Initiate the movement by raising one foot off of the ground. Externally rotate the leg and bring the knee toward your elbow, as far forward as possible. Return this leg to the starting position and repeat on the opposite side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm high-cable side bend",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Connect a standard handle to a tower. Move cable to highest pulley position. Stand with side to cable. With one hand, reach up and grab handle with underhand grip. Pull down cable until elbow touches your side and the handle is by your shoulder. Position feet hip-width apart. Place free hand on hip to help gauge pivot point. Keep arm in static position. Contract oblique to bring the weight down in a side crunch. Once you reach maximum contraction, slowly release the weight to the starting position. The weight stack should never be unloaded in a resting position. The aim is constant tension during the set. Repeat to failure. Then, reposition and repeat the same series of movements on the opposite side.  Tip: Keep your arm tucked in tight to your side; donâ€™t move it. This technique will ensure the weight is isolated directly to the obliques and not your biceps or shoulder."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Dumbbell Press",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Grab a couple of dumbbells and sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs. Clean the dumbbells up one at a time by using your thighs to bring the dumbbells up to shoulder height at each side. Rotate the wrists so that the palms of your hands are facing forward. This is your starting position. As you exhale, push the dumbbells up until they touch at the top. After a second pause, slowly come down back to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations:  You can perform the exercise standing or sitting on a regular flat bench. For people with lower back problems, the version described is the recommended one. You can also perform the exercise as Arnold Schwarzenegger used to do it, which is to start holding the dumbbells with a supinated grip (palms facing you) in front of your shoulders and then, as you start pushing up, you align the dumbbells in the starting position described on step 3 by rotating your wrists and touch the dumbbells at the top. As you come down, then you would go back to the starting position by rotating the wrist throughout the lowering portion until the palms of your hands are facing you. This variation is called the Arnold Press. However, it is not recommended if you have rotator cuff problems."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing dumbbell shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Standing with your feet shoulder width apart, take a dumbbell in each hand. Raise the dumbbells to head height, the elbows out and about 90 degrees. This will be your starting position. Maintaining strict technique with no leg drive or leaning back, extend through the elbow to raise the weights together directly above your head. Pause, and slowly return the weight to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "EZ-Bar Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "e-z_curl_bar",
      difficulty: "intermediate",
      instructions: "Stand up straight while holding an EZ curl bar at the wide outer handle. The palms of your hands should be facing forward and slightly tilted inward due to the shape of the bar. Keep your elbows close to your torso. This will be your starting position. Now, while keeping your upper arms stationary, exhale and curl the weights forward while contracting the biceps. Focus on only moving your forearms. Continue to raise the weight until your biceps are fully contracted and the bar is at shoulder level. Hold the top contracted position for a moment and squeeze the biceps. Then inhale and slowly lower the bar back to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can also perform this movement using an E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Natural Glute Ham Raise",
      type: "strength",
      muscle: "hamstrings",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Using the leg pad of a lat pulldown machine or a preacher bench, position yourself so that your ankles are under the pads, knees on the seat, and you are facing away from the machine. You should be upright and maintaining good posture. This will be your starting position. Lower yourself under control until your knees are almost completely straight. Remaining in control, raise yourself back up to the starting position. If you are unable to complete a rep, use a band, a partner, or push off of a box to aid in completing a repetition."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Zottman Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso. Make sure the palms of the hands are facing each other. This will be your starting position. While holding the upper arm stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Your wrist should rotate so that you have a supinated (palms up) grip. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Now during the contracted position, rotate your wrist until you now have a pronated (palms facing down) grip with the thumb at a higher position than the pinky. Slowly begin to bring the dumbbells back down using the pronated grip. As the dumbbells close your thighs, start rotating the wrist so that you go back to a neutral (palms facing your body) grip. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Glute ham raise-",
      type: "strength",
      muscle: "hamstrings",
      equipment: "none",
      difficulty: "beginner",
      instructions: "You can use a partner for this exercise or brace your feet under something stable. Begin on your knees with your upper legs and torso upright. If using a partner, they will firmly hold your feet to keep you in position. This will be your starting position. Lower yourself by extending at the knee, taking care to NOT flex the hips as you go forward. Place your hands in front of you as you reach the floor. This movement is very difficult and you may be unable to do it unaided. Use your arms to lightly push off the floor to aid your return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm lateral raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Pick a dumbbell and place it in one of your hands. Your non lifting hand should be used to grab something steady such as an incline bench press. Lean towards your lifting arm and away from the hand that is gripping the incline bench as this will allow you to keep your balance. Stand with a straight torso and have the dumbbell by your side at armâ€™s length with the palm of the hand facing you. This will be your starting position. While maintaining the torso stationary (no swinging), lift the dumbbell to your side with a slight bend on the elbow and your hand slightly tilted forward as if pouring water in a glass. Continue to go up until you arm is parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbell back down slowly to the starting position as you inhale. Repeat for the recommended amount of repetitions. Switch arms and repeat the exercise.  Variations: This exercise can also be performed sitting down."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Power Partials",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. Your feet should be about shoulder width apart. This will be your starting position. Keeping your arms straight and the torso stationary, lift the weights out to your sides until they are about shoulder level height while exhaling. Feel the contraction for a second and begin to lower the weights back down to the starting position while inhaling. Tip: Keep the palms facing down with the little finger slightly higher while lifting and lowering the weights as it will concentrate the stress on your shoulders mainly. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Leverage Shrug",
      type: "strength",
      muscle: "traps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Load the pins to an appropriate weight. Position yourself directly between the handles. Grasp the top handles with a comfortable grip, and then lower your hips as you take a breath. Look forward with your head and keep your chest up. Drive through the floor with your heels, extending your hips and knees as you rise to a standing position. Keep your arms straight throughout the movement, finishing with your shoulders back. This will be your starting position. Raise the weight by shrugging the shoulders towards your ears, moving straight up and down. Pause at the top of the motion, and then return the weight to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable V-bar push-down",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. The thumbs should be higher than the small finger. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the V-Bar slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a straight cable bar attachment for different variations of the exercise. Also, you can attach a rope to the pulley as well as using a reverse grip on the bar exercises. Just like the Triceps Pushdown but with the V-Bar attachment."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Wrist Roller",
      type: "strength",
      muscle: "forearms",
      equipment: "other",
      difficulty: "beginner",
      instructions: "To begin, stand straight up grabbing a wrist roller using a pronated grip (palms facing down). Your feet should be shoulder width apart. Slowly lift both arms until they are fully extended and parallel to the floor in front of you. Note: Make sure the rope is not wrapped around the roller. Your entire body should be stationary except for the forearms. This is the starting position. Rotate one wrist at a time in an upward motion to bring the weight up to the bar by rolling the rope around the roller. Once the weight has reached the bar, slowly begin to lower the weight back down by rotating the wrist in a downward motion until the weight reaches the starting position. Repeat for the prescribed amount of repetitions in your program."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline dumbbell reverse fly",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "To begin, lie down on an incline bench with the chest and stomach pressing against the incline. Have the dumbbells in each hand with the palms facing each other (neutral grip). Extend the arms in front of you so that they are perpendicular to the angle of the bench. The legs should be stationary while applying pressure with the ball of your toes. This is the starting position. Maintaining the slight bend of the elbows, move the weights out and away from each other (to the side) in an arc motion while exhaling. Tip: Try to squeeze your shoulder blades together to get the best results from this exercise. The arms should be elevated until they are parallel to the floor. Feel the contraction and slowly lower the weights back down to the starting position while inhaling. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Elbow-to-knee crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on the floor, crossing your right leg across your bent left knee. Clasp your hands behind your head, beginning with your shoulder blades on the ground. This will be your starting position. Perform the motion by flexing the spine and rotating your torso to bring the left elbow to the right knee. Return to the starting position and repeat the movement for the desired number of repetitions before switching sides."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell Pistol Squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Pick up a kettlebell with two hands and hold it by the horns. Hold one leg off of the floor and squat down on the other. Squat down by flexing the knee and sitting back with the hips, holding the kettlebell up in front of you. Hold the bottom position for a second and then reverse the motion, driving through the heel and keeping your head and chest up. Lower yourself again and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Overhead dumbbell front raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Hold the dumbbells in front of your thighs, palms facing your thighs. Keep your arms straight with a slight bend at the elbows but keep them locked. This will be your starting position. Raise the dumbbells in a semicircular motion to arm's length overhead as you exhale. Slowly return to the starting position using the same path as you inhale. Repeat for the recommended amount of repetitions.  Variation: You can perform this exercise with a barbell or by alternating dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Biceps curl to shoulder press",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Begin in a standing position with a dumbbell in each hand. Your arms should be hanging at your sides with your palms facing forward. Look directly ahead, keeping your chest up, with your feet shoulder-width apart. This will be your starting position. Initiate the movement by flexing the elbows to curl the weight. Do not use momentum or flex through the shoulder, instead use a controlled motion. Execute the pressing movement by extending the arm, flexing and abducting the shoulder to rotate the arm as you press above your head. Pause at the top of the motion before reversing the movement to return to the starting position. Complete the desired number of repetitions before switching to the opposite side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Weighted bench dip",
      type: "strength",
      muscle: "triceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "For this exercise you will need to place a bench behind your back and another one in front of you. With the benches perpendicular to your body, hold on to one bench on its edge with the hands close to your body, separated at shoulder width. Your arms should be fully extended. The legs will be extended forward on top of the other bench. Your legs should be parallel to the floor while your torso is to be perpendicular to the floor. Have your partner place the dumbbell on your lap. Note: This exercise is best performed with a partner as placing the weight on your lap can be challenging and cause injury without assistance. This will be your starting position. Slowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down. Using your triceps to bring your torso up again, lift yourself back to the starting position while exhaling. Repeat for the recommended amount of repetitions.  Caution: By placing your legs on top of another flat bench in front of you, the exercise becomes more challenging. It is best to attempt this exercise without any weights at first in order to get used to the movements required for good form. If that variation also becomes easy, then you can have a partner place plates on top of your lap. Make sure that in this case the partner ensures that the weights stay there throughout the movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Forward lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Stand erect with your feet hip-width apart, chest out, and shoulders back, maintaining the natural curvature of your spine. Your knees should be unlocked and your hand on your hips. This is your starting position. Take a moderate-length step forward with one foot, descending to a point in which your rear knee approaches the floor without touching, maintaining your body's upright posture. Your front knee should bend about 90 degrees, but for knee health it should not be forward of the vertical plane that extends straight up from your toes. If so, take a slightly longer step. From the bottom position, push back up from your forward foot, bringing it back beside the other. Repeat on the opposite side for the required number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Bench Press - Medium Grip",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. From the starting position, breathe in and begin coming down slowly until the bar touches your middle chest. After a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position at the top of the motion, hold for a second and then start coming down slowly again. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to touch your middle chest and nowhere else. Don't bounce the weight off your chest. You should be in full control of the barbell at all times."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Chest dip",
      type: "strength",
      muscle: "chest",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "For this exercise you will need access to parallel bars. To get yourself into the starting position, hold your body at arms length (arms locked) above the bars. While breathing in, lower yourself slowly with your torso leaning forward around 30 degrees or so and your elbows flared out slightly until you feel a slight stretch in the chest. Once you feel the stretch, use your chest to bring your body back to the starting position as you breathe out. Tip: Remember to squeeze the chest at the top of the movement for a second. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated dumbbell shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "While holding a dumbbell in each hand, sit on a military press bench or utility bench that has back support. Place the dumbbells upright on top of your thighs. Now raise the dumbbells to shoulder height one at a time using your thighs to help propel them up into position. Make sure to rotate your wrists so that the palms of your hands are facing forward. This is your starting position. Now, exhale and push the dumbbells upward until they touch at the top. Then, after a brief pause at the top contracted position, slowly lower the weights back down to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations: You can perform the exercise standing or sitting on a regular flat bench. For people with lower back problems, the version described is the recommended one. You can also perform the exercise as Arnold Schwarzenegger used to do it, which is to start holding the dumbbells with a supinated grip (palms facing you) in front of your shoulders and then, as you start pushing up, you align the dumbbells in the starting position described on step 3 by rotating your wrists and touch the dumbbells at the top. As you come down, then you would go back to the starting position by rotating the wrist throughout the lowering portion until the palms of your hands are facing you. This variation is called the Arnold Press. However, it is not recommended if you have rotator cuff problems."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using a straight bar attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "EZ-Bar Skullcrusher",
      type: "strength",
      muscle: "triceps",
      equipment: "e-z_curl_bar",
      difficulty: "intermediate",
      instructions: "Using a close grip, lift the EZ bar and hold it with your elbows in as you lie on the bench. Your arms should be perpendicular to the floor. This will be your starting position. Keeping the upper arms stationary, lower the bar by allowing the elbows to flex. Inhale as you perform this portion of the movement. Pause once the bar is directly above the forehead. Lift the bar back to the starting position by extending the elbow and exhaling. Repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "One-Arm Dumbbell Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Choose a flat bench and place a dumbbell on each side of it. Place the right leg on top of the end of the bench, bend your torso forward from the waist until your upper body is parallel to the floor, and place your right hand on the other end of the bench for support. Use the left hand to pick up the dumbbell on the floor and hold the weight while keeping your lower back straight. The palm of the hand should be facing your torso. This will be your starting position. Pull the resistance straight up to the side of your chest, keeping your upper arm close to your side and keeping the torso stationary. Breathe out as you perform this step. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. Also, make sure that the force is performed with the back muscles and not the arms. Finally, the upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the dumbbell; therefore do not try to pull the dumbbell up using the forearms. Lower the resistance straight down to the starting position. Breathe in as you perform this step. Repeat the movement for the specified amount of repetitions. Switch sides and repeat again with the other arm.  Variations: One-arm rows can also be performed using a high pulley or a low pulley instead of a dumbbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternating standing shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand with a dumbbell in each hand. Raise the dumbbells to your shoulders with your palms facing forward and your elbows pointed out. This will be your starting position. Extend one arm to press the dumbbell straight up, keeping your off hand in place. Do not lean or jerk the weight during the movement. After a brief pause, return the weight to the starting position. Repeat for the opposite side, continuing to alternate between arms."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Concentration curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Sit down on a flat bench with one dumbbell in front of you between your legs. Your legs should be spread with your knees bent and feet on the floor. Use your right arm to pick the dumbbell up. Place the back of your right upper arm on the top of your inner right thigh. Rotate the palm of your hand until it is facing forward away from your thigh. Tip: Your arm should be extended and the dumbbell should be above the floor. This will be your starting position. While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: At the top of the movement make sure that the little finger of your arm is higher than your thumb. This guarantees a good contraction. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the dumbbells back to starting position as your breathe in. Caution: Avoid swinging motions at any time. Repeat for the recommended amount of repetitions. Then repeat the movement with the left arm.  Variations: This exercise can be performed standing with the torso bent forward and the arm in front of you. In this case, no leg support is used for the back of your arm so you will need to make extra effort to ensure no movement of the upper arm. This is a more challenging version of the exercise and is not recommended for people with lower back issues."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline Crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Secure your legs at the end of the decline bench and lie down. Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head. While pushing the small of your back down in the bench to better isolate your abdominal muscles, begin to roll your shoulders off it. Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the bench only about four inches, and your lower back should remain on the bench. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don't cheat yourself by using momentum. After the one second contraction, begin to come down slowly again to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: There are many variations for the crunch. You can perform the exercise with weights, or on top of an exercise ball or on a flat bench."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline Dumbbell Flyes",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other. Once you are laying down, move the dumbbells in front of you at shoulder width. The palms of the hands should be facing each other and the arms should be perpendicular to the floor and fully extended. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.  Variation: You may want to use a palms facing forward version for different stimulation."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm incline rear delt raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "While holding a dumbbell in one hand, lay with your chest down on a slightly inclined (around 15 degrees when measured from the floor) adjustable bench. The other hand can be used to hold to the leg of the bench for stability. Position the palm of the hand that is holding the dumbbell in a neutral manner (palms facing your torso) as you keep the arm extended with the elbow slightly bent. This will be your starting position. Now raise the arm with the dumbbell to the side until your elbow is at shoulder height and your arm is roughly parallel to the floor as you exhale. Tip: Maintain your arm perpendicular to the torso while keeping your arm extended throughout the movement. Also, keep the contraction at the top for a second. Slowly lower the dumbbell to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise with both arms at the same time and also keeping the palms of the hands facing back as opposed to facing your torso."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine Bicep Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Adjust the seat to the appropriate height and make your weight selection. Place your upper arms against the pads and grasp the handles. This will be your starting position. Perform the movement by flexing the elbow, pulling your lower arm towards your upper arm. Pause at the top of the movement, and then slowly return the weight to the starting position. Avoid returning the weight all the way to the stops until the set is complete to keep tension on the muscles being worked."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Palms-Down Barbell Wrist Curl",
      type: "strength",
      muscle: "forearms",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Hold a barbell with both hands and your palms facing down; hands spaced about shoulder width. Place your feet flat on the floor, at a distance that is slightly wider than shoulder width apart. Lean forward and place your forearms on top of your upper thighs with your palms down. Tip: Make sure that the back of the wrists lay on top of your knees. This will be your starting position. Lower the bar as far as possible while inhaling and keeping a tight grip. Now curl bar up as high as possible while flexing the forearms and exhaling. Hold the contraction at the top for a second and Tip: Only the wrist should move.  Variations: This exercise can also be done with one or two dumbbells. Alternatively an EZ bar can also be used."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Car driver",
      type: "strength",
      muscle: "shoulders",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "While standing upright, hold a barbell plate in both hands at the 3 and 9 o'clock positions. Your palms should be facing each other and your arms should be extended straight out in front of you. This will be your starting position. Initiate the movement by rotating the plate as far to one side as possible. Use the same type of movement you would use to turn a steering wheel to one side. Reverse the motion, turning it all the way to the opposite side. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternating Deltoid Raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "In a standing position, hold a pair of dumbbells at your side. Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating. Return the weights to your side. On the next repetition, raise the weights laterally, raising them out to your side to about shoulder height. Return the weights to the starting position and continue alternating to the front and side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Hanging Oblique Knee Raise",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Take a grip on pull-ups bars; hang with your knees together and your body straight. This will be your starting position. Initiate the movement by flexing the hips and knees, drawing the legs up. Pull the knees up into one side, going above 90 degrees at the hip. Avoid any swinging, performing the exercise with control. Return to the starting position and then perform the movement to the other side. Continue alternating until the set in complete."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bodyweight Flyes",
      type: "strength",
      muscle: "chest",
      equipment: "e-z_curl_bar",
      difficulty: "beginner",
      instructions: "Position two equally loaded EZ bars on the ground next to each other. Ensure they are able to roll. Assume a push-up position over the bars, supporting your weight on your toes and hands with your arms extended and body straight. Place your hands on the bars. This will be your starting position. Using a slow and controlled motion, move your hands away from the midline of your body, rolling the bars apart. Inhale during this portion of the motion. After moving the bars as far apart as you can, return to the starting position by pulling them back together. Exhale as you perform this movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Calf Raises",
      type: "strength",
      muscle: "calves",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Adjust the padded lever of the calf raise machine to fit your height. Place your shoulders under the pads provided and position your toes facing forward (or using any of the two other positions described at the beginning of the chapter). The balls of your feet should be secured on top of the calf block with the heels extending off it. Push the lever up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Caution: If you suffer from lower back problems, a better exercise is the calf press as during a standing calf raise the back has to support the weight being lifted. Also, maintain your back straight and stationary at all times. Rounding of the back can cause lower back injury. Variations: There are several other ways to perform a standing calf raise. A barbell instead of a machine can be used instead as well as dumbbells, one leg or two legs at a time. Refer to the exercise descriptions of these movements below. A smith machine can be used for calf raises as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Push-Ups - Close Triceps Position",
      type: "strength",
      muscle: "triceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on the floor face down and place your hands closer than shoulder width for a close hand position. Make sure that you are holding your torso up at arms' length. Lower yourself until your chest almost touches the floor as you inhale. Using your triceps and some of your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.  Variations:  If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance.  See Also: Push-Up"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "One-Arm Long Bar Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end. Stand next to the bar, and take a grip with one hand close to the collar. Using your hips and legs, rise to a standing position. Assume a bent-knee stance with your hips back and your chest up. Your arm should be extended. This will be your starting position. Pull the weight to your side by retracting the shoulder and flexing the elbow. Do not jerk the weight or cheat during the movement. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Overhead cable curl",
      type: "strength",
      muscle: "biceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "To begin, set a weight that is comfortable on each side of the pulley machine. Note: Make sure that the amount of weight selected is the same on each side. Now adjust the height of the pulleys on each side and make sure that they are positioned at a height higher than that of your shoulders. Stand in the middle of both sides and use an underhand grip (palms facing towards the ceiling) to grab each handle. Your arms should be fully extended and parallel to the floor with your feet positioned shoulder width apart from each other. Your body should be evenly aligned the handles. This is the starting position. While exhaling, slowly squeeze the biceps on each side until your forearms and biceps touch. While inhaling, move your forearms back to the starting position. Note: Your entire body is stationary during this exercise except for the forearms. Repeat for the recommended amount of repetitions prescribed in your program.  Variations: This exercise can also be performed using one handle at a time."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-dumbbell front raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "With a wide stance, hold a dumbell with both hands, grasping the head of the dumbbell instead of the handle. Your arms should be extended and hanging at the waist. This will be your starting position. Raise the weight until it is above shoulder level, keeping your arms extended. Your torso and hips should remain stationary throughout the movement. Return to the starting position and repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline cable chest fly",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "To get yourself into the starting position, set the pulleys at the floor level (lowest level possible on the machine that is below your torso). Place an incline bench (set at 45 degrees) in between the pulleys, select a weight on each one and grab a pulley on each hand. With a handle on each hand, lie on the incline bench and bring your hands together at arms length in front of your face. This will be your starting position. With a slight bend of your elbows (in order to prevent stress at the biceps tendon), lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary. The movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and exhale. Hold the contracted position for a second. Tip: Make sure to use the same arc of motion used to lower the weights. Repeat the movement for the prescribed amount of repetitions.  Variation: You can vary the angle of the bench in order to target the upper chest at slightly different angles."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-leg depth squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "bands",
      difficulty: "intermediate",
      instructions: "Position a box in a rack. Secure a band or rope in place above the box. Standing in front of it, step onto the box to a full standing position, letting your other leg remain unsupported. Hold onto the band for balance . Continue stepping up and down on the same leg before switching to the opposite side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell suitcase crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "medicine_ball",
      difficulty: "intermediate",
      instructions: "Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head holding a medicine ball. This will be your starting position. To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Plate Twist",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "beginner",
      instructions: "Lie down on the floor or an exercise mat with your legs fully extended and your upper body upright. Grab the plate by its sides with both hands out in front of your abdominals with your arms slightly bent. Slowly cross your legs near your ankles and lift them up off the ground. Your knees should also be bent slightly. Note: Move your upper body back slightly to help keep you balanced turning this exercise. This is the starting position. Move the plate to the left side and touch the floor with it. Breathe out as you perform that movement. Come back to the starting position as you breathe in and then repeat the movement but this time to the right side of the body. Tip: Use a slow controlled movement at all times. Jerking motions can injure the back. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-leg cable hip extension",
      type: "strength",
      muscle: "glutes",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Hook a leather ankle cuff to a low cable pulley and then attach the cuff to your ankle. Face the weight stack from a distance of about two feet, grasping the steel frame for support. While keeping your knees and hips bent slightly and your abs tight, contract your glutes to slowly \"kick\" the working leg back in a semicircular arc as high as it will comfortably go as you breathe out. Tip: At full extension, squeeze your glutes for a second in order to achieve a peak contraction. Now slowly bring your working leg forward, resisting the pull of the cable until you reach the starting position. Repeat for the recommended amount of repetitions. Switch legs and repeat the movement for the other side.  Variations: You can perform this exercise with exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Weighted Jump Squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Position a lightly loaded barbell across the back of your shoulders. You could also use a weighted vest, sandbag, or other type of resistance for this exercise. The weight should be light enough that it doesn't slow you down significantly. Your feet should be just outside of shoulder width with your head and chest up. This will be your starting position. Using a countermovement, squat partially down and immediately reverse your direction to explode off of the ground, extending through your hips, knees, and ankles. Maintain good posture throughout the jump. As you return to the ground, absorb the impact through your legs."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Gorilla Chin/Crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Hang from a chin-up bar using an underhand grip (palms facing you) that is slightly wider than shoulder width. Now bend your knees at a 90 degree angle so that the calves are parallel to the floor while the thighs remain perpendicular to it. This will be your starting position. As you exhale, pull yourself up while crunching your knees up at the same time until your knees are at chest level. You will stop going up as soon as your nose is at the same level as the bar. Tip: When you get to this point you should also be finishing the crunch at the same time. Slowly start to inhale as you return to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can also add resistance by holding a dumbbell or medicine ball between your feet but this should only be done by the most advanced athletes. Alternatively, when you are very advanced you can also try the one-arm version where you grasp your wrist with your free hand and you work the obliques more."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kneeling cable triceps extension",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Place a bench sideways in front of a high pulley machine. Hold a straight bar attachment above your head with your hands about 6 inches apart with your palms facing down. Face away from the machine and kneel. Place your head and the back of your upper arms on the bench. Your elbows should be bent with the forearms pointing towards the high pulley. This will be your starting position. While keeping your upper arms close to your head at all times with the elbows in, press the bar out in a semicircular motion until the elbows are locked and your arms are parallel to the floor. Contract the triceps hard and keep this position for a second. Exhale as you perform this movement. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variation: You can also perform this exercise with exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kneeling Cable Crunch With Alternating Oblique Twists",
      type: "strength",
      muscle: "abdominals",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Connect a rope attachment to a high pulley cable and position a mat on the floor in front of it. Grab the rope with both hands and kneel approximately two feet back from the tower. Position the rope behind your head with your hands by your ears. Keep your hands in the same place, contract your abs and pull downward on the rope in a crunching movement until your elbows reach your knees. Pause briefly at the bottom and rise up in a slow and controlled manner until you reach the starting position. Repeat the same downward movement until youâ€™re halfway down, at which time youâ€™ll begin rotating one of your elbows to the opposite knee. Again, pause briefly at the bottom and rise up in a slow and controlled manner until you reach the starting position. Repeat the same movement as before, but alternate the other elbow to the opposite knee. Continue this series of movements to failure.  Tip: Keep your elbows in tight when doing the normal crunching movement, but extend them outward when doing the oblique twist. This technique will open your body for a greater rotation, as well as allow your elbow to drive backward with more force."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Bicep Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand up straight with a dumbbell in each hand at arm's length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position. Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a brief pause as you squeeze your biceps. Then, inhale and slowly begin to lower the dumbbells back to the starting position. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc. You can also do the exercise starting with both palms of the hands facing the torso and then rotating forward as the movement is performed. At the top of the movement the palms should face forward and the small finger should be higher than the thumb for a peak contraction."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Goblet Squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "From a standing position cradle the head of a dumbbell close to your chest with both hands. You should be looking straight forward, with your shoulders back, your spine straight, and your feet just outside of shoulder width. This will be your starting position. Initiate the movement by descending into a squat, flexing the hips and knees to lower your body. Maintain the angle of your torso, paying close attention to the preservation of your spine. As you descend, push your knees outward and keep your weight on your heels. Descend until you either reach the full squat position with your hamstrings on your calves or until your back starts to round. At the bottom of the motion pause briefly. Return to the starting position by driving through your heels, extending the knees and hips to return to the starting position. Repeat the movement for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand up straight while holding a dumbbell on each hand (palms facing the side of your legs). Position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section. Begin to slowly lower your torso by bending the knees as you maintain a straight posture with the head up. Continue down until your thighs are parallel to the floor. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly. Begin to raise your torso as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position. Repeat for the recommended amount of repetitions.  Caution: Be cautious with the weight used; in case of doubt, use less weight rather than more. The squat is a very safe exercise but only if performed properly. You may use wrist wraps for this exercise. Variations: As previously mentioned, there are various stances that can be used depending on what you want to emphasize. You can also use a barbell for this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell front squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, bring your arms up under the bar while keeping the elbows high and the upper arm slightly above parallel to the floor. Rest the bar on top of the deltoids and cross your arms while grasping the bar for total control. Lift the bar off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section). Begin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly. Begin to raise the bar as you exhale by pushing the floor mainly with the middle of your foot as you straighten the legs again and go back to the starting position. Repeat for the recommended amount of repetitions.  Caution: This is not an exercise to be taken lightly. If you have back issues, substitute it with the dumbbell squat variation or a leg press instead. If you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more. The front squat is a very safe exercise but only if performed properly. This version of the squat is better suited for advanced athletes. Variations: As previously mentioned, there are various stances that can be used depending on what you want to emphasize. You can also place a small block under the heels to improve balance."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-grip pull-down",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Sit down on a pull-down machine with a V-Bar attached to the top pulley. Adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar. Grab the V-bar with the palms facing each other (a neutral grip). Stick your chest out and lean yourself back slightly (around 30-degrees) in order to better engage the lats. This will be your starting position. Using your lats, pull the bar down as you squeeze your shoulder blades. Continue until your chest nearly touches the V-bar. Exhale as you execute this motion. Tip: Keep the torso stationary throughout the movement. After a second hold on the contracted position, slowly bring the bar back to the starting position as you breathe in. Repeat for the prescribed number of repetitions.  Caution: Avoid the temptation to use a weight so big that you need to start swinging your torso in order to perform the exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Triceps Pushdown - Rope Attachment",
      type: "strength",
      muscle: "triceps",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Attach a rope attachment to a high pulley and grab with a neutral grip (palms facing each other). Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the rope with the palms facing each other. This is your starting position. Using the triceps, bring the rope down as you bring each side of the rope to the side of your thighs. At the end of the movement the arms are fully extended and perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After holding for a second, at the contracted position, bring the rope slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a V-angled bar or straight bar. Same as the Triceps Pushdown except with the rope attachment."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "To begin, place a flat bench (or preferably one with back support) underneath a smith machine. Position the barbell at a height so that when seated on the flat bench, the arms must be almost fully extended to reach the barbell. Once you have the correct height, sit slightly in behind the barbell so that there is an imaginary straight line from the tip of your nose to the barbell. Your feet should be stationary. Grab the barbell with the palms facing forward, unlock it and lift it up so that your arms are fully extended. This is the starting position. Slowly begin to lower the barbell until it is level with your chin while inhaling. Then lift the barbell back to the starting position using your shoulders while exhaling. Repeat for the recommended amount of repetitions.  Variation: You can use dumbbells or a barbell to perform this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated triceps press",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Sit down on a bench with back support and grasp a dumbbell with both hands and hold it overhead at arm's length. Tip: a better way is to have somebody hand it to you especially if it is very heavy. The resistance should be resting in the palms of your hands with your thumbs around it. The palm of the hand should be facing inward. This will be your starting position. Keeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semi-circular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step. Go back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step. Repeat for the recommended amount of repetitions.  Variations:  You can perform this exercise standing as well but this puts strain on your back especially if you are using heavy dumbbells like 95 lbs or so. Another variation is to use an EZ or straight bar instead in which case you will be holding the bar from the inside (around 5 inches between both hands) with the palms facing forward (pronated grip). There is also a bar that has parallel bars inside (often referred to as a triceps blaster) and this can also be used for this exercise. Finally, a low pulley cable with a rope attachment or bar (straight or EZ) attachment at the end can be used for variety purposes as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Lying Supination",
      type: "strength",
      muscle: "forearms",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Lie sideways on a flat bench with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it. Bend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm. Now raise the upper arm so that the forearm is parallel to the floor and perpendicular to your torso (Tip: So the forearm will be directly in front of you). The upper arm will be stationary by your torso and should be parallel to the floor (aligned with your torso at all times). This will be your starting position. As you breathe out, externally rotate your forearm so that the dumbbell is lifted up in a semicircle motion as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is perpendicular to the floor and the torso pointing towards the ceiling. At this point you will hold the contraction for a second. As you breathe in, slowly go back to the starting position. Repeat for the recommended amount of repetitions and then switch to the other arm.  Caution: There is no need to go heavy with this exercise. Too much weight will cause rotator cuff injury. Variations: You can perform this exercise standing and with cables."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Pull-up",
      type: "strength",
      muscle: "lats",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Take a wide grip on a pull-up bar, hanging freely with your arms extended. This will be your starting position. Pull yourself up by flexing the elbows and adducting the glenohumeral joint. Do not swing or use momentum to complete the movement. Attempt to get your chin above your hands. Pause at the top of the motion before lowering yourself to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Wide-grip bench press",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Lie back on a flat bench with feet firm on the floor. Using a wide, pronated (palms forward) grip that is around 3 inches away from shoulder width (for each hand), lift the bar from the rack and hold it straight over you with your arms locked. The bar will be perpendicular to the torso and the floor. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your middle chest. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions.  Caution:  If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to fall on your middle chest and nowhere else. Don't bounce the weight off your chest. You should be in full control of the barbell at all times.  Variations: You can use dumbbells for this exercise as well as exercise bands. Same as the Barbell Bench Press but with a different grip."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-grip EZ-bar curl",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Stand up with your torso upright while holding an E-Z Curl Bar at the closer inner handle. The palm of your hands should be facing forward and they should be slightly tilted inwards due to the shape of the bar. The elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using an E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the wider grip for variety purposes."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "T-Bar Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Load the bar to an appropriate weight for your training. Stand astride the bar and bend at the hips to take a pronated grip on the handles. Ensure that your back remains flat, and then remove the weight from the rests, letting the bar hang at arms length. This will be your starting position. Perform the movement by flexing the elbows and retracting the shoulder blades, pulling the weight to your chest. After a brief pause at the top of the motion, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bent Over Two-Arm Long Bar Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Put weight on one of the ends of an Olympic barbell. Make sure that you either place the other end of the barbell in the corner of two walls; or put a heavy object on the ground so the barbell cannot slide backward. Bend forward until your torso is as close to parallel with the floor as you can and keep your knees slightly bent. Now grab the bar with both arms just behind the plates on the side where the weight was placed and put your other hand on your knee. This will be your starting position. Pull the bar straight up with your elbows in (to maximize back stimulation) until the plates touch your lower chest. Squeeze the back muscles as you lift the weight up and hold for a second at the top of the movement. Breathe out as you lift the weight. Tip: Use a stirrup or double handle cable attachment by hooking it under the end of the bar. Slowly lower the bar to the starting position getting a nice stretch on the lats. Tip: Do not let the plates touch the floor. To ensure the best range of motion, I recommend using small plates (25-lb ones) as opposed to larger plates (like 35-45lb ones). Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise using a low pulley or T-bar row machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Muscle Up",
      type: "strength",
      muscle: "lats",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Grip the rings using a false grip, with the base of your palms on top of the rings. Initiate a pull up by pulling the elbows down to your side, flexing the elbows. As you reach the top position of the pull-up, pull the rings to your armpits as you roll your shoulders forward, allowing your elbows to move straight back behind you. This puts you into the proper position to continue into the dip portion of the movement. Maintaining control and stability, extend through the elbow to complete the motion. Use care when lowering yourself to the ground."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the top of the shoulders at the beginning of the motion. Your chest and head should be up and handles held with a pronated grip. This will be your starting position. Press the handles upward by extending through the elbow. After a brief pause at the top, return the weight to just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline EZ-bar skullcrusher",
      type: "strength",
      muscle: "triceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Hold a barbell with an overhand grip (palms down) that is a little closer together than shoulder width. Lie back on an incline bench set at any angle between 45-75-degrees. Bring the bar overhead with your arms extended and elbows in. The arms should be in line with the torso above the head. This will be your starting position. Now lower the bar in a semicircular motion behind your head until your forearms touch your biceps. Inhale as you perform this movement. Tip: Keep your upper arms stationary and close to your head at all times. Only the forearms should move. Return to the starting position as you breathe out and you contract the triceps. Hold the contraction for a second. Repeat for the recommended amount of repetitions.  Variations: Can also be done with an e-z bar, with two dumbbells (using a pronated or supinated grip), seated or standing or with two dumbbells and your palms facing in."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternating sit-through with crunch",
      type: "strength",
      muscle: "middle_back",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Put weight on one of the ends of an Olympic barbell. Make sure that you either place the other end of the barbell in the corner of two walls; or put a heavy object on the ground so the barbell cannot slide backward. Bend forward until your torso is as close to parallel with the floor as you can and keep your knees slightly bent. Now grab the bar with one arm just behind the plates on the side where the weight was placed and put your other hand on your knee. This will be your starting position. Pull the bar straight up with your elbow in (to maximize back stimulation) until the plates touch your lower chest. Squeeze the back muscles as you lift the weight up and hold for a second at the top of the movement. Breathe out as you lift the weight. Tip: Do not allow for any swinging of the torso. Only the arm should move. Slowly lower the bar to the starting position getting a nice stretch on the lats. Tip: Do not let the plates touch the floor. To ensure the best range of motion, I recommend using small plates (25-lb ones) as opposed to larger plates (like 35-45lb ones). Repeat for the recommended amount of repetitions and switch arms.  Variations: You can perform this exercise using a low pulley."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Wide-Grip Decline Barbell Bench Press",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Lie back on a decline bench with the feet securely locked at the front of the bench. Using a wide, pronated (palms forward) grip that is around 3 inches away from shoulder width (for each hand), lift the bar from the rack and hold it straight over you with your arms locked. The bar will be perpendicular to the torso and the floor. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your lower chest. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions.  Caution:  If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to fall on your middle chest and nowhere else. Don't bounce the weight off your chest. You should be in full control of the barbell at all times.  Variations: You can use dumbbells for this exercise as well as exercise bands. Same as the Decline Barbell Bench Press but with a wider grip."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Front Plate Raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "While standing straight, hold a barbell plate in both hands at the 3 and 9 o'clock positions. Your palms should be facing each other and your arms should be extended and locked with a slight bend at the elbows and the plate should be down near your waist in front of you as far as you can go. Tip: The arms will remain in this position throughout the exercise. This will be your starting position. Slowly raise the plate as you exhale until it is a little above shoulder level. Hold the contraction for a second. Tip: make sure that you do not swing the weight or bend at the elbows. Your torso should remain stationary throughout the movement as well. As you inhale, slowly lower the plate back down to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can use dumbbells, barbells, cables or exercise bands to perform this movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline Close-Grip Bench To Skull Crusher",
      type: "strength",
      muscle: "triceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. Now lower the bar down to your lower chest as you breathe in. Keep the elbows in as you perform this movement. Using the triceps to push the bar back up, press it back to the starting position as you exhale. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat steps 3-6 until the recommended amount of repetitions is performed.  Variations: You can use an e-z bar or dumbbells to perform this movement. You can also perform it on a flat bench as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying Leg Curls",
      type: "strength",
      muscle: "hamstrings",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Adjust the machine lever to fit your height and lie face down on the leg curl machine with the pad of the lever on the back of your legs (just a few inches under the calves). Tip: Preferably use a leg curl machine that is angled as opposed to flat since an angled position is more favorable for hamstrings recruitment. Keeping the torso flat on the bench, ensure your legs are fully stretched and grab the side handles of the machine. Position your toes straight (or you can also use any of the other two stances described on the foot positioning section). This will be your starting position. As you exhale, curl your legs up as far as possible without lifting the upper legs from the pad. Once you hit the fully contracted position, hold it for a second. As you inhale, bring the legs back to the initial position. Repeat for the recommended amount of repetitions.  Caution: Do not ever use so much weight on the exercise that you start using swinging and jerking as you can risk both lower back injury and also a hamstring injury. Variations: Since you have three foot positions you have in reality three exercises. The movement can also be performed with a dumbbell held in between your feet (a partner needs to place it properly). This latter exercise though is only suitable for advanced trainees. Finally, it is also possible to just use one leg at a time for better isolation."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cross-body hammer curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Stand up straight with a dumbbell in each hand. Your hands should be down at your side with your palms facing in. While keeping your palms facing in and without twisting your arm, curl the dumbbell of the right arm up towards your left shoulder as you exhale. Touch the top of the dumbbell to your shoulder and hold the contraction for a second. Slowly lower the dumbbell along the same path as you inhale and then repeat the same movement for the left arm. Continue alternating in this fashion until the recommended amount of repetitions is performed for each arm.  Variations: You can also perform this exercise in between two pulleys using the end of a rope attachment on each arm."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Shotgun row",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Attach a single handle to a low cable. After selecting the correct weight, stand a couple feet back with a wide-split stance. Your arm should be extended and your shoulder forward. This will be your starting position. Perform the movement by retracting the shoulder and flexing the elbow. As you pull, supinate the wrist, turning the palm upward as you go. After a brief pause, return to the starting position. <"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Ab Roller",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Hold the Ab Roller with both hands and kneel on the floor. Now place the ab roller on the floor in front of you so that you are on all your hands and knees (as in a kneeling push up position). This will be your starting position. Slowly roll the ab roller straight forward, stretching your body into a straight position. Tip: Go down as far as you can without touching the floor with your body. Breathe in during this portion of the movement. After a pause at the stretched position, start pulling yourself back to the starting position as you breathe out. Tip: Go slowly and keep your abs tight at all times.  Caution: This exercise is not advised for people with lower back problems or hernias. Variations: If you are advanced you can perform the exercise moving the ab roller to the sides in a diagonal fashion as opposed to straight forward. This version places more emphasis on the obliques."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse-grip incline dumbbell bench press",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Lay on an incline bench holding a dumbbell in each hand. Begin with your arms extended above your torso with a supinated grip. Your back should be arched, feet driving through the ground, and lats tight. This will be your starting position. Lower the weights to your chest by flexing the elbows. After a brief pause, return the weights to the starting position by extending the elbows"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Leg Press",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section). Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you. Tip: Make sure that you do not lock your knees. Your torso and the legs should make a perfect 90-degree angle. This will be your starting position. As you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle. Pushing mainly with the heels of your feet and using the quadriceps go back to the starting position as you exhale. Repeat for the recommended amount of repetitions and ensure to lock the safety pins properly once you are done. You do not want that platform falling on you fully loaded.  Caution: Always check to make sure that when you re-rack the weight the platform is securely locked. Variations: All foot stance variations described in the foot stance section."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Stiff-Legged Dumbbell Deadlift",
      type: "strength",
      muscle: "hamstrings",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Grasp a couple of dumbbells holding them by your side at arm's length. Stand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position. Keeping the knees stationary, lower the dumbbells to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Exhale as you perform this movement Start bringing your torso up straight again by extending your hips and waist until you are back at the starting position. Inhale as you perform this movement. Repeat for the recommended amount of repetitions.  Caution: This is not an exercise that is recommended for people with lower back problems. Also, it needs to be treated with the utmost respect paying special attention not to round the back forward as you move the torso down; the back should always be straight. Finally, jerking motions or doing too much weight can injure your back. Variations: The exercise can also be performed with a barbell also."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Crossover",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "To get yourself into the starting position, place the pulleys on a high position (above your head), select the resistance to be used and hold the pulleys in each hand. Step forward in front of an imaginary straight line between both pulleys while pulling your arms together in front of you. Your torso should have a small forward bend from the waist. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, extend your arms to the side (straight out at both sides) in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms and torso should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you breathe out. Make sure to use the same arc of motion used to lower the weights. Hold for a second at the starting position and repeat the movement for the prescribed amount of repetitions.  Variations: You can vary the point in front of you where your arms meet."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Incline Bench Press Medium-Grip",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Load the bar to an appropriate weight for your training. Lay on the bench with your feet flat on the ground, driving through to your hips. Your back should be arched, and your shoulder blades retracted. Take a medium, pronated grip covering the rings on the bar. Remove the bar from the rack, holding the weight above your chest with your arms extended. This will be your starting position. Lower the bar to the sternum by flexing the elbows. Maintain control and do not bounce the bar off of your chest. Your lats should stay tight and elbows slightly drawn in. After touching your torso with the bar, extend the elbows to return the bar to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline Dumbbell Flyes",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Hold a dumbbell on each hand and lie on an incline bench that is set to an incline angle of no more than 30 degrees. Extend your arms above you with a slight bend at the elbows. Now rotate the wrists so that the palms of your hands are facing you. Tip: The pinky fingers should be next to each other. This will be your starting position. As you breathe in, start to slowly lower the arms to the side while keeping the arms extended and while rotating the wrists until the palms of the hand are facing each other. Tip: At the end of the movement the arms will be by your side with the palms facing the ceiling. As you exhale start to bring the dumbbells back up to the starting position by reversing the motion and rotating the hands so that the pinky fingers are next to each other again. Tip: Keep in mind that the movement will only happen at the shoulder joint and at the wrist. There is no motion that happens at the elbow joint. Repeat for the recommended amount of repetitions.  Variations: You can perform regular flyes and also twisting flyes where your initial position starts with the thumbs facing each other instead of the pinky."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Cable Rows",
      type: "strength",
      muscle: "middle_back",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "For this exercise you will need access to a low pulley row machine with a V-bar. Note: The V-bar will enable you to have a neutral grip where the palms of your hands face each other. To get into the starting position, first sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked. Lean over as you keep the natural alignment of your back and grab the V-bar handles. With your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise. Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in. Repeat for the recommended amount of repetitions.  Caution: Avoid swinging your torso back and forth as you can cause lower back injury by doing so. Variations: You can use a straight bar instead of a V-Bar and perform with a pronated grip (palms facing down-forward) or a supinated grip (palms facing up-reverse grip)."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Tricep Dumbbell Kickback",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Start with a dumbbell in each hand and your palms facing your torso. Keep your back straight with a slight bend in the knees and bend forward at the waist. Your torso should be almost parallel to the floor. Make sure to keep your head up. Your upper arms should be close to your torso and parallel to the floor. Your forearms should be pointed towards the floor as you hold the weights. There should be a 90-degree angle formed between your forearm and upper arm. This is your starting position. Now, while keeping your upper arms stationary, exhale and use your triceps to lift the weights until the arm is fully extended. Focus on moving the forearm. After a brief pause at the top contraction, inhale and slowly lower the dumbbells back down to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: This exercise can be executed also one arm at a time much like the one arm rows are performed. Also, if you like the one arm variety, you can use a low pulley handle instead of a dumbbell for better peak contraction. In this case, the palms should be facing up (supinated grip) as opposed to the torso (neutral grip)."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Otis-Up",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Secure your feet and lay back on the floor. Your knees should be bent. Hold a weight with both hands to your chest. This will be your starting position. Initiate the movement by flexing the hips and spine to raise your torso up from the ground. As you move up, press the weight up so that it is above your head at the top of the movement. Return the weight to your chest as you reverse the sit-up motion, ensuring not to go all the way down to the floor."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Ab bicycle",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie flat on the floor with your lower back pressed to the ground. For this exercise, you will need to put your hands beside your head. Be careful however to not strain with the neck as you perform it. Now lift your shoulders into the crunch position. Bring knees up to where they are perpendicular to the floor, with your lower legs parallel to the floor. This will be your starting position. Now simultaneously, slowly go through a cycle pedal motion kicking forward with the right leg and bringing in the knee of the left leg. Bring your right elbow close to your left knee by crunching to the side, as you breathe out. Go back to the initial position as you breathe in. Crunch to the opposite side as you cycle your legs and bring closer your left elbow to your right knee and exhale. Continue alternating in this manner until all of the recommended repetitions for each side have been completed.  Notes: While you cannot add resistance to this exercise you can concentrate on perfect execution and slow speed."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell forward lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "expert",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just below shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and step forward with your right leg and squat down through your hips, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: Do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. li> Using mainly the heel of your foot, push up and go back to the starting position as you exhale. Repeat the movement for the recommended amount of repetitions and then perform with the left leg.  Caution: This is a movement that requires a great deal of balance so if you suffer from balance problems you may wish to either avoid it or just use your own bodyweight while holding on to a fixed object. Definitely never perform with a barbell on your back if you suffer from balance issues. Variations: There are several ways to perform the exercise.  One way is to alternate each leg. For instance do one repetition with the right, then the left, then the right and so on. The other way is to do what I call a static lunge where your starting position is with one of your feet already forward. In this case, you just go up and down from that starting position until you are done with the recommended amount of repetitions. Then you switch legs and do the same. A more challenging version is the walking lunges where you walk across the room but in a lunging fashion. For walking lunges the leg being left back has to be brought forward after the lunging action has happened in order to continue moving ahead. This version is reserved for the most advanced athletes."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "3/4 sit-up",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie down on the floor and secure your feet. Your legs should be bent at the knees. Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position. Flex your hips and spine to raise your torso toward your knees. At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only Â¾ of the way down. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Exercise ball leg curl",
      type: "strength",
      muscle: "hamstrings",
      equipment: "exercise_ball",
      difficulty: "intermediate",
      instructions: "Begin on the floor laying on your back with your feet on top of the ball. Position the ball so that when your legs are extended your ankles are on top of the ball. This will be your starting position. Raise your hips off of the ground, keeping your weight on the shoulder blades and your feet. Flex the knees, pulling the ball as close to you as you can, contracting the hamstrings. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Glute bridge",
      type: "strength",
      muscle: "glutes",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. This will be your starting position. Pushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second. Slowly go back to the starting position as you breathe in.  Variations: You can perform this exercise one leg at a time."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-Grip Front Lat Pulldown",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar. Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width. As you have both arms extended in front of you - while holding the bar at the chosen grip width - bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position. As you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary (only the arms should move). The forearms should do no other work except for holding the bar; therefore do not try to pull the bar down using the forearms. After a second in the contracted position, while squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement. 6. Repeat this motion for the prescribed amount of repetitions.  Variations: The behind-the-neck variation is not recommended as it can be hard on the rotator cuff due to the hyperextension created by bringing the bar behind the neck."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dip Machine",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Sit securely in a dip machine, select the weight and firmly grasp the handles. Now keep your elbows in at your sides in order to place emphasis on the triceps. The elbows should be bent at a 90 degree angle. As you contract the triceps, extend your arms downwards as you exhale. Tip: At the bottom of the movement, focus on keeping a little bend in your arms to keep tension on the triceps muscle. Now slowly let your arms come back up to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise on parallel bars or on a triceps dip assist machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline dumbbell row",
      type: "strength",
      muscle: "middle_back",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Using a neutral grip, lean into an incline bench. Take a dumbbell in each hand with a neutral grip, beginning with the arms straight. This will be your starting position. Retract the shoulder blades and flex the elbows to row the dumbbells to your side. Pause at the top of the motion, and then return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Lunges",
      type: "strength",
      muscle: "quadriceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position. Step forward with your right leg around 2 feet or so from the foot being left stationary behind and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground. Using mainly the heel of your foot, push up and go back to the starting position as you exhale. Repeat the movement for the recommended amount of repetitions and then perform with the left leg.  Caution: This is a movement that requires a great deal of balance so if you suffer from balance problems you may wish to either avoid it or just use your own bodyweight while holding on to a fixed object. Definitely never perform with a barbell on your back if you suffer from balance issues. Variations: There are several ways to perform the exercise. One way is to alternate each leg. For instance do one repetition with the right, then the left, then the right and so on. The other way is to do what I call a static lunge where your starting position is with one of your feet already forward. In this case, you just go up and down from that starting position until you are done with the recommended amount of repetitions. Then you switch legs and do the same. A more challenging version is the walking lunges where you walk across the room but in a lunging fashion. For walking lunges the leg being left back has to be brought forward after the lunging action has happened in order to continue moving ahead. This version is reserved for the most advanced athletes. Lunges can be performed with dumbbells as described above or with a barbell on the back, though the barbell variety is better suited for the advanced athletes who have mastered the exercise and no longer have balance issues."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm standing shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Grab a dumbbell and either sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs or stand up straight. Clean the dumbbell up to bring it to shoulder height. The other hand can be kept fully extended to the side, by the waist or grabbing a fixed surface. Rotate the wrist so that the palm of your hand is facing forward. This is your starting position. As you exhale, push the dumbbell up until your arm is fully extended. After a second pause, slowly come down back to the starting position as you inhale. Repeat for the recommended amount of repetitions and then switch arms.  Variations: You can perform the exercise standing or sitting on a regular flat bench. For people with lower back problems, the version described is the recommended one. You can also perform the exercise as Arnold Schwarzenegger used to do it, which is to start holding the dumbbells with a supinated grip (palms facing you) in front of your shoulders and then, as you start pushing up, you align the dumbbells in the starting position described on step 3 by rotating your wrists and touch the dumbbells at the top. As you come down, then you would go back to the starting position by rotating the wrist throughout the lowering portion until the palms of your hands are facing you. This variation is called the Arnold Press. However, it is not recommended if you have rotator cuff problems."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Preacher Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "To perform this movement you will need a preacher bench and an E-Z bar. Grab the E-Z curl bar at the close inner handle (either have someone hand you the bar which is preferable or grab the bar from the front bar rest provided by most preacher benches). The palm of your hands should be facing forward and they should be slightly tilted inwards due to the shape of the bar. With the upper arms positioned against the preacher bench pad and the chest against it, hold the E-Z Curl Bar at shoulder length. This will be your starting position. As you breathe in, slowly lower the bar until your upper arm is extended and the biceps is fully stretched. As you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the bar is at shoulder height. Squeeze the biceps hard and hold this position for a second. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise also using a low pulley with an E-Z Bar attachment instead. In this case you will need to position the bench in front of the pulley. You may also use a wider grip for variety purposes."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie down on the floor with your legs fully extended and arms to the side of your torso with the palms on the floor. Your arms should be stationary for the entire exercise. Move your legs up so that your thighs are perpendicular to the floor and feet are together and parallel to the floor. This is the starting position. While inhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the floor. At the end of this movement your knees will be touching your chest. Hold the contraction for a second and move your legs back to the starting position while exhaling. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Dumbbell Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Standing Dumbbell Triceps Extension"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bodyweight squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Stand with your feet shoulder width apart. You can place your hands behind your head. This will be your starting position. Begin the movement by flexing your knees and hips, sitting back with your hips. Continue down to full depth if you are able,and quickly reverse the motion until you return to the starting position. As you squat, keep your head and chest up and push your knees out."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bent Over Two-Dumbbell Row With Palms In",
      type: "strength",
      muscle: "middle_back",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "With a dumbbell in each hand (palms facing each other), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The weights should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. While keeping the torso stationary, lift the dumbbells to your side as you breathe out, squeezing your shoulder blades together. On the top contracted position, squeeze the back muscles and hold for a second. Slowly lower the weight again to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Caution:  This exercise is not recommended for people with back problems. A Low Pulley Row is a better choice for people with back issues. Ensure perfect form and never round the back as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more.  Variations: You can perform the same exercise using a low pulley instead with a V-bar or with a barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Hex-bar deadlift",
      type: "strength",
      muscle: "quadriceps",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "For this exercise load a trap bar, also known as a hex bar, to an appropriate weight resting on the ground. Stand in the center of the apparatus and grasp both handles. Lower your hips, look forward with your head and keep your chest up. Begin the movement by driving through the heels and extend your hips and knees. Avoid rounding your back at all times. At the completion of the movement, lower the weight back to the ground under control."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Narrow-stance leg press",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a less-than-shoulder-width narrow stance with the toes slightly pointed out. Your feet should be around 3 inches or less apart. Tip: Keep your head up at all times and also maintain the back on the pad at all times. Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you. Tip: Make sure that you do not lock your knees. Your torso and the legs should make a perfect 90-degree angle. This will be your starting position. As you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle. Pushing mainly with the heels of your feet and using the quadriceps go back to the starting position as you exhale. Repeat for the recommended amount of repetitions and ensure to lock the safety pins properly once you are done. You do not want that platform falling on you fully loaded.  Caution: Always check to make sure that when you re-rack the weight the platform is securely locked. Variations: All foot stance variations described in the foot stance section."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-leg glute bridge",
      type: "strength",
      muscle: "glutes",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lay on the floor with your feet flat and knees bent. Raise one leg off of the ground, pulling the knee to your chest. This will be your starting position. Execute the movement by driving through the heel, extending your hip upward and raising your glutes off of the ground. Extend as far as possible, pause and then return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Curls Lying Against An Incline",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Lie against an incline bench, with your arms holding a barbell and hanging down in a horizontal line. This will be your starting position. While keeping the upper arms stationary, curl the weight up as high as you can while squeezing the biceps. Breathe out as you perform this portion of the movement. Tip: Only the forearms should move. Do not swing the arms. After a second contraction, slowly go back to the starting position as you inhale. Tip: Make sure that you go all of the way down. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise using an E-Z bar or dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Clam",
      type: "strength",
      muscle: "abductors",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Begin by lying on your side on the ground. Support your head on your left arm. Flex the hips to 45 degrees and the knees to approximately 90 degrees, with your right leg directly on top of your left. This will be your starting position. Initiate the exercise by abducting your right leg, pushing your knee away from the midline of your body. Maintain contact between your feet throughout the movement. Pause at the top of the motion, and then return to the starting position. Repeat for the desired number of repetitions. Do both sides."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Narrow Stance Hack Squats",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Place the back of your torso against the back pad of the machine and hook your shoulders under the shoulder pads provided. Position your legs in the platform using a less than shoulder width narrow stance with the toes slightly pointed out. Your feet should be around 3 inches or less apart. Tip: Keep your head up at all times and also maintain the back on the pad at all times. Place your arms on the side handles of the machine and disengage the safety bars (which on most designs is done by moving the side handles from a facing front position to a diagonal position). Now straighten your legs without locking the knees. This will be your starting position. Begin to slowly lower the unit by bending the knees as you maintain a straight posture with the head up (back on the pad at all times). Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Begin to raise the unit as you exhale by pushing the floor with mainly with the heels of your feet as you straighten the legs again and go back to the starting position. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Close-Grip Concentration Barbell Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Sit down on a flat bench with a barbell or E-Z Bar in front of you in between your legs. Your legs should be spread with the knees bent and the feet on the floor. Use your arms to pick the barbell up and place the back of your upper arms on top of your inner thighs (around three and a half inches away from the front of the knee). A supinated grip closer than shoulder width is needed to perform this exercise. Tip: Your arm should be extended at arms length and the barbell should be above the floor. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the barbell back to starting position as your breathe in. Tip: Avoid swinging motions at any time. Repeat for the recommended amount of repetitions.  Variations: This exercise can be performed standing with the torso bent forward and the arm in front of you. In this case, no leg support is used for the back of your arm so you will need to make extra effort to ensure no movement of the upper arms. This is a more challenging version of the exercise and is not recommended for people with lower back issues. You can also perform as described here but without using a bench. So for this version you will be kneeling and the weight of the barbell will help to balance you."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Lying Pronation",
      type: "strength",
      muscle: "forearms",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Lie on a flat bench face down with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it. Bend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm. Now raise the upper arm so that the forearm is perpendicular to the floor and the upper arm is perpendicular to your torso. Tip: The upper arm should be parallel to the floor and also creating a 90-degree angle with your torso. This will be your starting position. As you breathe out, externally rotate your forearm so that the dumbbell is lifted forward as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is parallel to the floor. At this point you will hold the contraction for a second. As you breathe in, slowly go back to the starting position. Repeat for the recommended amount of repetitions.  Caution: There is no need to go heavy with this exercise. Too much weight will cause rotator cuff injury. Variations: This exercise can be performed standing."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine box squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "To begin, first set the bar to a position that best matches your height. Once the bar is loaded, step under it and position it across the back of your shoulders. Take the bar with your hands facing forward, unlock it and lift it off the rack by extending your legs. Move your feet forward about 18 inches in front of the bar. Position your legs using a shoulder width stance with the toes slightly pointed out. Look forward at all times and maintain a neutral or slightly arched spine. This will be your starting position. Slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper and lower leg breaks 90 degrees. Begin to raise the bar as you exhale by pushing the floor with the heels of your feet, extending the knees and returning to the starting position. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Upside-down pull-up",
      type: "strength",
      muscle: "middle_back",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Begin by taking a medium to wide grip on a pull-up apparatus with your palms facing away from you. From a hanging position, tuck your knees to your chest, leaning back and getting your legs over your side of the pull-up apparatus. This will be your starting position. Beginning with your arms straight, flex the elbows and retract the shoulder blades to raise your body up until your legs contact the pull-up apparatus. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse Barbell Preacher Curls",
      type: "strength",
      muscle: "biceps",
      equipment: "e-z_curl_bar",
      difficulty: "beginner",
      instructions: "Grab an EZ-bar using a shoulder width and palms down (pronated) grip. Now place the upper part of both arms on top of the preacher bench and have your arms extended. This will be your starting position. As you exhale, use the biceps to curl the weight up until your biceps are fully contracted and the barbell is at shoulder height. Squeeze the biceps hard for a second at the contracted position. As you breathe in, slowly lower the barbell until your upper arms are extended and the biceps is fully stretched. Repeat for the recommended amount of repetitions.  Variations:  This exercise can be performed using an e-z bar, cables or dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-grip EZ-bar bench press",
      type: "strength",
      muscle: "chest",
      equipment: "e-z_curl_bar",
      difficulty: "intermediate",
      instructions: "Lie on a flat bench with an EZ bar loaded to an appropriate weight. Using a narrow grip lift the bar and hold it straight over your torso with your elbows in. The arms should be perpendicular to the floor. This will be your starting position. Now lower the bar down to your lower chest as you breathe in. Keep the elbows in as you perform this movement. Using the triceps to push the bar back up, press it back to the starting position by extending the elbows as you exhale. Repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline Push-Up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Stand facing bench or sturdy elevated platform. Place hands on edge of bench or platform, slightly wider than shoulder width. Position forefoot back from bench or platform with arms and body straight. Arms should be perpendicular to body. Keeping body straight, lower chest to edge of box or platform by bending arms. Push body up until arms are extended. Repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Hyperextensions With No Hyperextension Bench",
      type: "strength",
      muscle: "lower_back",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "With someone holding down your legs, slide yourself down to the edge a flat bench until your hips hang off the end of the bench. Tip: Your entire upper body should be hanging down towards the floor. Also, you will be in the same position as if you were on a hyperextension bench but the range of motion will be shorter due to the height of the flat bench vs. that of the hyperextension bench. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you almost touch the floor or you feel a nice stretch on the hamstrings (whichever comes first). Tip: Never round the back as you perform this exercise. Slowly raise your torso back to the initial position as you exhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed using a hyperextension bench. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell front raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Pick a couple of dumbbells and stand with a straight torso and the dumbbells on front of your thighs at arms length with the palms of the hand facing your thighs. This will be your starting position. While maintaining the torso stationary (no swinging), lift the dumbbells to the front with a slight bend on the elbow and the palms of the hands always facing down. Continue to go up until you arms are slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top. As you inhale, lower the dumbbells back down slowly to the starting position. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed by alternating hands, meaning doing one repetition with the right arm, and then one with the left, back to the right, etc. Also, you could use a barbell as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Parallel Bar Dip",
      type: "strength",
      muscle: "triceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Stand between a set of parallel bars. Place a hand on each bar, and then take a small jump to help you get into the starting position with your arms locked out. Begin by flexing the elbow, lowering your body until your arms break 90 degrees. Avoid swinging, and maintain good posture throughout the descent. Reverse the motion by extending the elbow, pushing yourself back up into the starting position. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Neck Press",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Lie back on a flat bench. Using a medium-width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over your neck with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your neck. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up). Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution:  It is imperative that if you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. For obvious reasons you need to be in full control of the barbell at all times."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine Squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Adjust the weight to an appropriate load for your training. With a shoulder-width stance, squat under the shoulder pads and adjust the machine to the appropriate height. Move to a standing position with your back slightly arched, chest up, and head looking forward. This will be your starting position. Lower your torso by flexing the hips and the knees. Continue until you are below parallel, and then reverse direction by extending the hips and the knees."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "V-bar pull-up",
      type: "strength",
      muscle: "lats",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Start by placing the middle of the V-bar in the middle of the pull-up bar (assuming that the pull-up station you are using does not have neutral grip handles). The V-Bar handles will be facing down so that you can hang from the pull-up bar through the use of the handles. Once you securely place the V-bar, take a hold of the bar from each side and hang from it. Stick your chest out and lean yourself back slightly in order to better engage the lats. This will be your starting position. Using your lats, pull your torso up while leaning your head back slightly so that you do not hit yourself with the chin-up bar. Continue until your chest nearly touches the V-bar. Exhale as you execute this motion. After a second hold on the contracted position, slowly lower your body back to the starting position as you breathe in. Repeat for the prescribed number of repetitions.  Variations:  If you are new at this exercise and do not have the strength to perform it, use a pull-up assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help.  On the other hand, more advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Ring dip",
      type: "strength",
      muscle: "triceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Grip a ring in each hand, and then take a small jump to help you get into the starting position with your arms locked out. Begin by flexing the elbow, lowering your body until your arms break 90 degrees. Avoid swinging, and maintain good posture throughout the descent. Reverse the motion by extending the elbow, pushing yourself back up into the starting position. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing One-Arm Cable Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Start out by grabbing single handle next to the low pulley machine. Make sure you are far enough from the machine so that your arm is supporting the weight. Make sure that your upper arm is stationary, perpendicular to the floor with elbows in and palms facing forward. Your non lifting arm should be grabbing your waist. This will allow you to keep your balance. Slowly begin to curl the single handle upwards while keeping the upper arm stationary until your forearm touches your bicep while exhaling. Tip: Only the forearm should move. Hold the contraction position as you squeeze the bicep and then lower the single handle back down to the starting position as you inhale. Repeat for the recommended amount of repetitions. Switch arms while performing this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Double-arm triceps kick-back",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "With a dumbbell in each hand and the palms facing your torso, bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up. The upper arms should be close to the torso and parallel to the floor while the forearms are pointing towards the floor as the hands hold the weights. Tip: There should be a 90-degree angle between the forearms and the upper arm. This is your starting position. Keeping the upper arms stationary, use the triceps to lift the weights as you exhale until the forearms are parallel to the floor and the whole arms are extended. Like many other arm exercises, only the forearm moves. After a second contraction at the top, slowly lower the dumbbells back to their starting position as you inhale. Repeat the movement for the prescribed amount of repetitions.  Variations:  This exercise can be executed also one arm at a time. Also, if you like the one arm variety, you can use a single hand handle or rope attachment instead of a dumbbell for better peak contraction. In this case of the single hand handle, the palms should be facing up as opposed to the torso."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell reverse lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position. Step backward with your right leg around two feet or so from the left foot and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Tip: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground. Keep the torso upright during the lunge; flexible hip flexors are important. A long lunge emphasizes the Gluteus Maximus; a short lunge emphasizes Quadriceps. Push up and go back to the starting position as you exhale. Tip: Use the ball of your feet to push in order to accentuate the quadriceps. To focus on the glutes, press with your heels. Now repeat with the opposite leg.  Variations: There are several ways to perform the exercise. You can do what I call a static lunge where your starting position is with one of your feet already forward. In this case, you just go up and down from that starting position until you are done with the recommended amount of repetitions. Then you switch legs and do the same. A more challenging version is the walking lunges where you walk across the room but in a lunging fashion. For walking lunges the leg being left back has to be brought forward after the lunging action has happened in order to continue moving ahead. This version is reserved for the most advanced athletes. Lunges can be performed with dumbbells as described above or with a barbell on the back, though the barbell variety is better suited for the advanced athletes who have mastered the exercise and no longer have balance issues."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Calf Raise",
      type: "strength",
      muscle: "calves",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Sit on the machine and place your toes on the lower portion of the platform provided with the heels extending off. Choose the toe positioning of your choice (forward, in, or out) as per the beginning of this chapter. Place your lower thighs under the lever pad, which will need to be adjusted according to the height of your thighs. Now place your hands on top of the lever pad in order to prevent it from slipping forward. Lift the lever slightly by pushing your heels up and release the safety bar. This will be your starting position. Slowly lower your heels by bending at the ankles until the calves are fully stretched. Inhale as you perform this movement. Raise the heels by extending the ankles as high as possible as you contract the calves and breathe out. Hold the top contraction for a second. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing dumbbell shrug",
      type: "strength",
      muscle: "traps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand erect with a dumbbell on each hand (palms facing your torso), arms extended on the sides. Lift the dumbbells by elevating the shoulders as high as possible while you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the dumbbells. Only the shoulders should be moving up and down. Lower the dumbbells back to the original position. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise with bands, barbells or cables. You can also use a single handle and work one side at a time."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Calf Press On The Leg Press Machine",
      type: "strength",
      muscle: "calves",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance. Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you without locking your knees. (Note: In some leg press units you can leave the safety bars on for increased safety. If your leg press unit allows for this, then this is the preferred method of performing the exercise.) Your torso and the legs should make perfect 90-degree angle. Now carefully place your toes and balls of your feet on the lower portion of the platform with the heels extending off. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position. Press on the platform by raising your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Caution: Be very cautious as you place the feet in the bottom part of the platform as if you slip and the safety bars are not locked then you could suffer a serious accident. Variations: You can perform this exercise one leg at a time."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell step-up",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck) and stand upright behind an elevated platform (such as the one used for spotting behind a flat bench). This is your starting position. Place the right foot on the elevated platform. Step on the platform by extending the hip and the knee of your right leg. Use the heel mainly to lift the rest of your body up and place the foot of the left leg on the platform as well. Breathe out as you execute the force required to come up. Step down with the left leg by flexing the hip and knee of the right leg as you inhale. Return to the original standing position by placing the right foot of to next to the left foot on the initial position. Repeat with the right leg for the recommended amount of repetitions and then perform with the left leg.  Note: This is a great exercise for people with lower back problems that are unable to do stiff legged deadlifts. Variations: Just like lunges, this exercise can also be performed by alternating between the right and the left leg every time until all repetitions have been performed for both legs. Also, dumbbells can be used. Beginners can start with only the bodyweight, especially if they have balance issues."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Feet-elevated bench dip",
      type: "strength",
      muscle: "triceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "For this exercise you will need to place a bench behind your back. With the bench perpendicular to your body, and while looking away from it, hold on to the bench on its edge with the hands fully extended, separated at shoulder width. The legs will be extended forward, bent at the waist and perpendicular to your torso. This will be your starting position. Slowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down. Using your triceps to bring your torso up again, lift yourself back to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can place your legs on top of another flat bench in front of you in order to make the exercise more challenging. If that variation also becomes easy, then you can have a partner place plates on top of your lap. Make sure that in this case the partner ensures that the weights stay there throughout the movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bent Over Barbell Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Holding a barbell with a pronated grip (palms facing down), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. Now, while keeping the torso stationary, breathe out and lift the barbell to you. Keep the elbows close to the body and only use the forearms to hold the weight. At the top contracted position, squeeze the back muscles and hold for a brief pause. Then inhale and slowly lower the barbell back to the starting position. Repeat for the recommended amount of repetitions.  Caution: This exercise is not recommended for people with back problems. A Low Pulley Row is a better choice for people with back issues. Also, just like with the bent knee dead-lift, if you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more. Variations: You can perform the same exercise using a supinated (palms facing you) grip."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Crunches",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie flat on your back with your feet flat on the ground, or resting on a bench with your knees bent at a 90 degree angle. If you are resting your feet on a bench, place them three to four inches apart and point your toes inward so they touch. Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head. While pushing the small of your back down in the floor to better isolate your abdominal muscles, begin to roll your shoulders off the floor. Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don't cheat yourself by using momentum. After the one second contraction, begin to come down slowly again to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: There are many variations for the crunch. You can perform the exercise with weights, or on top of an exercise ball or on a decline bench."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Alternate Bicep Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand (torso upright) with a dumbbell in each hand held at arms length. The elbows should be close to the torso and the palms of your hand should be facing your thighs. While holding the upper arm stationary, curl the right weight as you rotate the palm of the hands until they are facing forward. At this point continue contracting the biceps as you breathe out until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move. Slowly begin to bring the dumbbell back to the starting position as your breathe in. Tip: Remember to twist the palms back to the starting position (facing your thighs) as you come down. Repeat the movement with the left hand. This equals one repetition. Continue alternating in this manner for the recommended amount of repetitions.  Variations:  There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it using both arms at the same time. Additionally, you may perform it with a starting position in which both palms are facing forward. In this case, you may alternate the arms as well, or perform at the same time. You can also do the exercise starting with both palms of the hands facing the torso and then rotating forward as the movement is performed. At the top of the movement the palms should face forward and the small finger should be higher than the thumb for a peak contraction.  Just like the Dumbbell Biceps Curl except you alternate each hand, curling one dumbbell at a time."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bent-over dumbbell rear delt row",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Begin in a standing position with a dumbbell in each hand. With the knees slightly bent, flex at the hip to lean forward. Ensure that your back is straight and stays that way for the duration of the exercise. Allow your arms to hang perpendicular to the floor, with the wrists pronated and the elbows pointed to your sides. This will be your starting position. Initiate the movement by flexing the elbows and transversely extending the shoulder, rowing the dumbbells toward your torso. Your shoulders should stay retracted, squeezing your scapulae together throughout the movement. The upper arms should be perpendicular to your torso. Continue the row until the elbows are inside of 90 degrees, contracting your shoulders as you pause at the top. Return to the starting position, taking care to maintain both shoulder and spinal positioning. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "External Rotation with Cable",
      type: "strength",
      muscle: "shoulders",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Adjust the cable to the same height as your elbow. Stand with your left side to the band a couple of feet away. Grasp the handle with your right hand, and keep your elbow pressed firmly to your side. We recommend you hold a pad or foam roll in place with your elbow to keep it firmly in position. With your upper arm in position, your elbow should be flexed to 90 degrees with your hand reaching across the front of your torso. This will be your starting position. Execute the movement by rotating your arm in a backhand motion, keeping your elbow in place. Continue as far as you are able, pause, and then return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Handstand push-up",
      type: "strength",
      muscle: "shoulders",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "With your back to the wall bend at the waist and place both hands on the floor at shoulder width. Kick yourself up against the wall with your arms straight. Your body should be upside down with the arms and legs fully extended. Keep your whole body as straight as possible. Tip: If doing this for the first time, have a spotter help you. Also, make sure that you keep facing the wall with your head, rather than looking down. Slowly lower yourself to the ground as you inhale until your head almost touches the floor. Tip: It is of utmost importance that you come down slow in order to avoid head injury. Push yourself back up slowly as you exhale until your elbows are nearly locked. Repeat for the recommended amount of repetitions.  Caution: Ensure that the floor surface is not slippery and also, if performing for the first time, use a spotter until you get good at this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm dumbbell preacher curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Grab a dumbbell with the right arm and place the upper arm on top of the preacher bench or the incline bench. The dumbbell should be held at shoulder length. This will be your starting position. As you breathe in, slowly lower the dumbbell until your upper arm is extended and the biceps is fully stretched. As you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the dumbbell is at shoulder height. Again, remember that to ensure full contraction you need to bring that small finger higher than the thumb. Squeeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions. Switch arms and repeat the movement.  Variations: You can perform this exercise using a low pulley instead of a dumbbell. In this case you will need to position the bench in front of the pulley."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Step-up with knee raise",
      type: "strength",
      muscle: "glutes",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Stand facing a box or bench of an appropriate height with your feet together. This will be your starting position. Begin the movement by stepping up, putting your left foot on the top of the bench. Extend through the hip and knee of your front leg to stand up on the box. As you stand on the box with your left leg, flex your right knee and hip, bringing your knee as high as you can. Reverse this motion to step down off the box, and then repeat the sequence on the opposite leg."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine back squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "To begin, first set the bar on the height that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side (palms facing forward), unlock it and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance which targets overall development; however you can choose any of the three stances discussed in the foot stances section). Begin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly. Begin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs again and go back to the starting position. Repeat for the recommended amount of repetitions.  Caution: This is not an exercise to be taken lightly. If you have back issues, substitute it with leg presses instead. If you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more. The squat is a very safe exercise but only if performed properly. Variations: As previously mentioned, there are various stances that can be used depending on what you want to emphasize. You can also place a small block under the heels to improve balance. Same as the Barbell Squat but with a Smith Machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline dumbbell front raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Sit down on an incline bench with the incline set anywhere between 30 to 60 degrees while holding a dumbbell on each hand. Tip: You can change the angle to hit the muscle a little differently each time. Extend your arms straight in front of you and have your palms facing down with the dumbbells raised about 1 inch above your thighs. This will be your starting position. Slowly raise the dumbbells straight up until they are slightly above your shoulders, while keeping your elbows locked. Squeeze at the top for a second and make sure you breathe out during this portion of the movement. Tip: Keep your head resting down against the bench and your legs on the floor at all times. Lower the arms back to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can use a barbell as well for this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternate Incline Dumbbell Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Sit down on an incline bench with a dumbbell in each hand being held at arms length. Tip: Keep the elbows close to the torso.This will be your starting position. While holding the upper arm stationary, curl the right weight forward while contracting the biceps as you breathe out. As you do so, rotate the hand so that the palm is facing up. Continue the movement until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move. Slowly begin to bring the dumbbell back to starting position as your breathe in. Repeat the movement with the left hand. This equals one repetition. Continue alternating in this manner for the recommended amount of repetitions.  Just like the Incline Dumbbell Curl but only one arm at a time."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing dumbbell upright row",
      type: "strength",
      muscle: "traps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Grasp a dumbbell in each hand with a pronated (palms forward) grip that is slightly less than shoulder width. The dumbbells should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position. Use your side shoulders to lift the dumbbells as you exhale. The dumbbells should be close to the body as you move it up and the elbows should drive the motion. Continue to lift them until they nearly touch your chin. Tip: Your elbows should drive the motion. As you lift the dumbbells, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement. Lower the dumbbells back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Caution: Be very careful with how much weight you use in this exercise. Too much weight leads to bad form, which in turn can cause shoulder injury. I've seen this too many times so please no jerking, swinging and cheating. Also, if you suffer from shoulder problems, you may want to stay away from upright rows and substitute by some form of lateral raises. Variations: This exercise can also be performed using a straight bar attached to a low pulley and it can also be performed using an e-z bar."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm cable front raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Select the weight on a low pulley machine and grasp the single hand cable attachment that is attached to the low pulley with your left hand. Face away from the pulley and put your arm straight down with the hand cable attachment in front of your thighs at arms' length with the palms of the hand facing your thighs. This will be your starting position. While maintaining the torso stationary (no swinging), lift the left arm to the front with a slight bend on the elbow and the palms of the hand always faces down. Continue to go up until you arm is slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top. Now as you inhale lower the arm back down slowly to the starting position. Once all of the recommended amount of repetitions have been performed for this arm, switch arms and perform the exercise with the right one.  Variations: This exercise can be performed also with dumbbells or an exercise band."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Two-Arm Kettlebell Military Press",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you swing the kettlebells towards your shoulders. Rotate your wrists as you do so, so that the palms face forward. Press the kettlebells up and out. As the kettlebells pass your head, lean into the weights so that the kettlebells are racked behind your head. Make sure to contract your lats, butt, and stomach for added stability."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline cable chest press",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 45 degrees to the body, with your head and chest up. The elbows should be bent to about 90 degrees. This will be your starting position. Begin by extending through the elbow, pressing the handles together straight in front of you. Keep your shoulder blades retracted as you execute the movement. After pausing at full extension, return to the starting position, keeping tension on the cables."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Rope climb",
      type: "strength",
      muscle: "lats",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Grab the rope with both hands above your head. Pull down on the rope as you take a small jump. Wrap the rope around one leg, using your feet to pinch the rope. Reach up as high as possible with your arms, gripping the rope tightly. Release the rope from your feet as you pull yourself up with your arms, bringing your knees towards your chest. Resecure your feet on the rope, and then stand up to take another high hold on the rope. Continue until you reach the top of the rope. To lower yourself, loosen the grip of your feet on the rope as you slide down using a hand over hand motion."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Bradford press",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Place a loaded bar at shoulder level in a rack. With a pronated grip at shoulder width, begin with the bar racked across the front of your shoulders. This is your starting position. Initiate the lift by extending the elbows to press the bar overhead. Avoid locking out the elbow as you move the weight behind your head. Lower the bar down to the back of the head until your elbow forms a right angle. Lift the bar back over your head by extending the elbows Lower the bar down to the starting position. Alternate in this manner until you complete the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Neutral-grip dumbbell bench press",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Take a dumbbell in each hand and lay back onto a flat bench. Your feet should be flat on the floor and your shoulder blades retracted. Maintaining a neutral grip, palms facing each other, begin with your arms extended directly above you, perpendicular to the floor. This will be your starting position. Begin the movement by flexing the elbow, lowering the upper arms to the side. Descend until the dumbbells are to your torso. Pause, then extend the elbow and return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Chest Press",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 45 degrees to the body, with your head and chest up. The elbows should be bent to about 90 degrees. This will be your starting position. Begin by extending through the elbow, pressing the handles together straight in front of you. Keep your shoulder blades retracted as you execute the movement. After pausing at full extension, return to th starting position, keeping tension on the cables. You can also execute this movement with your back off the pad, at an incline or decline, or alternate hands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing concentration curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Taking a dumbbell in your working hand, lean forward. Allow your working arm to hang perpendicular to the ground with the elbow pointing out. This will be your starting position. Flex the elbow to curl the weight, keeping the upper arm stationary. At the top of the repetition, flex the biceps and pause. Lower the dumbbell back to the starting position. Repeat the movement for the prescribed amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Wide-Grip Rear Pull-Up",
      type: "strength",
      muscle: "lats",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Grab the pull-up bar with the palms facing forward using a wide grip. As you have both arms extended in front of you holding the bar, bring your torso forward and head so that there is an imaginary line from the pull-up bar to the back of your neck. This is your starting position. Pull your torso up until the bar is near the back of your neck. To do this, draw the shoulders and upper arms down and back while slightly leaning your head forward. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar. After a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched. Repeat this motion for the prescribed amount of repetitions.  Caution: The behind the neck variation can be hard on the rotator cuff due to the hyperextension created by bringing the bar behind the neck. Therefore if you have rotator cuff issues, use the pull-up to front version instead. Variations:  If you are new at this exercise and do not have the strength to perform it, use a chin assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help.  This is like a normal wide-grip pull-up but you finish with the bar behind your neck instead of in front."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell pass-through lunge",
      type: "strength",
      muscle: "hamstrings",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Stand with your torso upright holding a kettlebell in your right hand. This will be your starting position. Step forward with your left foot and lower your upper body down by flexing the hip and the knee, keeping the torso upright. Lower your back knee until it nearly touches the ground. As you lunge, pass the kettlebell under your front leg to your opposite hand. Pressing through the heel of your foot, return to the starting position. Repeat the movement for the recommended amount of repetitions, alternating legs."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Hands-elevated push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height. Place your hands on the bar, with your hands about shoulder width apart. Position your feet back from the bar with arms and body straight. This will be your starting position. Keeping your body straight, lower your chest to the bar by bending the arms. Return to the starting position by extending the elbows, pressing yourself back up."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Straight-arm rope pull-down",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Attach a rope to a high pulley and make your weight selection. Stand a couple feet back from the pulley with your feet staggered and take the rope with both hands. Lean forward from the hip, keeping your back straight, with your arms extended up in front of you. This will be your starting position. Keeping your arms straight, extend the shoulder to pull the rope down to your thighs. Pause at the bottom of the motion, squeezing your lats. Return to the starting position without allowing the weight to fully rest on the stack."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Shoulder Press",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Sit on a bench with back support in a squat rack. Position a barbell at a height that is just above your head. Grab the barbell with a pronated grip (palms facing forward). Once you pick up the barbell with the correct grip width, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position. Lower the bar down to the shoulders slowly as you inhale. Lift the bar back up to the starting position as you exhale. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed standing."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Power clean",
      type: "strength",
      muscle: "hamstrings",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Note: This exercise is extremely complex and requires the execution of many phases. Phase 1: Starting Position  Stand with your feet slightly wider than shoulder width apart and toes pointing out slightly. Squat down and grasp bar with a closed, pronated grip. Your hands should be slightly wider than shoulder width apart outside knees with elbows fully extended. Place the bar about 1 inch in front of your shins and over the balls of your feet. Your back should be flat or slightly arched, your chest held up and out and your shoulder blades should be retracted. Keep your head in a neutral position (in line with vertebral column and not tilted or rotated) with your eyes focused straight ahead. Inhale during this phase.  Phase 2: First Pull Phase  Lift the bar from the floor by forcefully extending the hips and the knees as you exhale. Tip: The upper torso should maintain the same angle. Do not bend at the waist yet and do not let the hips rise before the shoulders (this would have the effect of pushing the glutes in the air and stretching the hamstrings. Keep elbows fully extended with the head in a neutral position and the shoulders over the bar. As the bar raises keep it as close to the shins as possible.  Phase 3: Transition or Scoop Phase  As the bar passes the knees, thrust your hips forward and slightly bend the knees to avoid locking them. Tip: At this point your thighs should be against the bar. Keep the back flat or slightly arched, elbows fully extended and your head neutral. Tip: You will hold your breath until the next phase.  Phase 4: Second Pull Phase  Inhale and then forcefully and quickly extend your hips and knees and stand on your toes. Keep the bar as close to your body as possible. Tip: Your back should be flat with the elbows pointed out to the sides and your head in a neutral position. Also, keep your shoulders over the bar and arms straight as long as possible. When your lower body joints are fully extended, shrug the shoulders upward rapidly without letting the elbows flex yet. Exhale during this portion of the movement. As the shoulders reach their highest elevation flex your elbows to begin pulling your body under the bar. Continue to pull the arms as high and as long as possible. Tip: Due to the explosive nature of this phase, your torso will be erect or with an arched back, your head will be tilted back slightly and your feet may lose contact with the floor.  Phase 5: Catch Phase  After the lower body has fully extended and the bar reaches near maximal height, pull your body under the bar and rotate the arms around and under the bar. Simultaneously, flex the hips and knees into a quarter squat position. Once the arms are under the bar, inhale and then lift your elbows to position the upper arms parallel to the floor. Rack the bar across the front of your collar bones and front shoulder muscles. Catch the bar with an erect and tight torso, a neutral head position and flat feet. Exhale during this movement. Stand up by extending the hips and knees to a fully erect position.  Phase 6: Downward Movement Phase  Lower the bar by gradually reducing the muscular tension of the arms to allow a controlled descent of the bar to the thighs. Inhale during this movement. Simultaneously flex the hips and knees to cushion the impact of the bar on the thighs. Squat down with the elbows fully extended until the bar touches the floor. Start over at Phase 1 and repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell sumo deadlift high pull",
      type: "strength",
      muscle: "traps",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Place a kettlebell on the ground between your feet. Position your feet in a wide stance, and grasp the kettlebell with two hands. Set your hips back as far as possible, with your knees bent. Keep your chest and head up. This will be your starting position. Begin by extending the hips and knees, simultaneously pulling the kettlebell to your shoulders, raising your elbows as you do so. Reverse the motion to return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Calf-Machine Shoulder Shrug",
      type: "strength",
      muscle: "traps",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Position yourself on the calf machine so that the shoulder pads are above your shoulders. Your torso should be straight with the arms extended normally by your side. This will be your starting position. Raise your shoulders up towards your ears as you exhale and hold the contraction for a full second. Slowly return to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can use dumbbells, barbells, smith machines and pulley machines to perform shrugging motions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Rocking Standing Calf Raise",
      type: "strength",
      muscle: "calves",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place it on the back of your shoulders (slightly below the neck). Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance. Also maintain a straight back and keep the knees with a slight bend; never locked. This will be your starting position. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending (other than the slight initial bend we created during positioning) at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Now lift your toes by contracting the tibia muscles in the front of the calves as you breathe out. Hold for a second and bring them back down as you breathe in. Repeat for the recommended amount of repetitions.  Caution: Maintain your back straight and stationary at all times. Rounding of the back can cause lower back injury. Also, choose a conservative weight. This exercise requires a lot of balance and choosing too much weight may cause you to lose balance and fall. Variations: A smith machine can be used for this exercise as well and it is a better choice for those with poor balance. Dumbbells can be used also."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Goblet Squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Stand holding a light kettlebell by the horns close to your chest. This will be your starting position. Squat down between your legs until your hamstrings are on your calves. Keep your chest and head up and your back straight. At the bottom position, pause and use your elbows to push your knees out. Return to the starting position, and repeat for 10-20 repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Behind-the-head skullcrusher",
      type: "strength",
      muscle: "triceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "While holding a barbell or EZ Curl bar with a pronated grip (palms facing forward), lie on your back on a flat bench with your head close to the end of the bench. Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles. Extend your arms in front of you and slowly bring the bar back in a semi circular motion (while keeping the arms extended) to a position over your head. At the end of this step your arms should be overhead and perpendicular to the floor. This will be your starting position. Tip: Keep your elbows in at all times. As you inhale, lower the bar by bending at the elbows and while keeping the upper arm stationary. Keep lowering the bar until your forearms are perpendicular to the floor. As you exhale bring the bar back up to the starting position by pushing the bar up in a semi-circular motion until the lower arms are also parallel to the floor. Contract the triceps hard at the top of the movement for a second. Tip: Again, only the forearms should move. The upper arms should remain stationary at all times. Repeat for the recommended amount of repetitions.  Variation: You can use dumbbells to make the exercise more challenging."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated palms-up wrist curl",
      type: "strength",
      muscle: "forearms",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Hold a barbell with both hands and your palms facing up; hands spaced about shoulder width. Place your feet flat on the floor, at a distance that is slightly wider than shoulder width apart. Lean forward and place your forearms on top of your upper thighs with your palms up. Tip: Make sure that the front of the wrists lay on top of your knees. This will be your starting position. Lower the bar as far as possible while inhaling and keeping a tight grip. Now curl bar up as high as possible while flexing the forearms and exhaling. Hold the contraction at the top for a second and Tip: Only the wrist should move.  Variations: This exercise can also be done with one or two dumbbells. Alternatively an EZ bar can also be used."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse Cable Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Stand up with your torso upright while holding a bar attachment that is attached to a low pulley using a pronated (palms down) and shoulder width grip. Make sure also that you keep the elbows close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations: You can also perform this movement using an E-Z barbell or straight barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell side bend",
      type: "strength",
      muscle: "abdominals",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand up straight while holding a dumbbell on the left hand (palms facing the torso) as you have the right hand holding your waist. Your feet should be placed at shoulder width. This will be your starting position. While keeping your back straight and your head up, bend only at the waist to the right as far as possible. Breathe in as you bend to the side. Then hold for a second and come back up to the starting position as you exhale. Tip: Keep the rest of the body stationary. Now repeat the movement but bending to the left instead. Hold for a second and come back to the starting position. Repeat for the recommended amount of repetitions and then change hands.  Caution: Refrain from using this exercise if your obliques tend to grow easily as wide obliques take away from your symmetry. Variations: You can also do this exercise while seating on a bench or with a barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lat pull-down",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar. Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width. As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position. As you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the bar; therefore do not try to pull down the bar using the forearms. After a second at the contracted position squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement. Repeat this motion for the prescribed amount of repetitions.  Variations: The behind the neck variation is not recommended as it can be hard on the rotator cuff due to the hyperextension created by bringing the bar behind the neck."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Side Lateral Raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position. While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbells back down slowly to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variation: This exercise can also be performed sitting down."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternating incline dumbbell biceps curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Sit back on an incline bench with a dumbbell in each hand held at arms length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position. While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second. Slowly begin to bring the dumbbells back to starting position as your breathe in. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell One-Legged Deadlift",
      type: "strength",
      muscle: "hamstrings",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Hold a kettlebell by the handle in one hand. Stand on one leg, on the same side that you hold the kettlebell. Keeping that knee slightly bent, perform a stiff legged deadlift by bending at the hip, extending your free leg behind you for balance. Continue lowering the kettlebell until you are parallel to the ground, and then return to the upright position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternate Hammer Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. While holding the upper arm stationary, curl the right weight forward while contracting the biceps as you breathe out. Continue the movement until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move. Slowly begin to bring the dumbbells back to starting position as your breathe in. Repeat the movement with the left hand. This equals one repetition. Continue alternating in this manner for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by doing both arms at the same time. Same as the Hammer Curl but you alternate arms."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline Push-Up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Move your feet up to a box or bench. This will be your starting position. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Captain's chair knee raise",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Position your body on the vertical leg raise bench so that your forearms are resting on the pads next to the torso and holding on to the handles. Your arms will be bent at a 90 degree angle. The torso should be straight with the lower back pressed against the pad of the machine and the legs extended pointing towards the floor. This will be your starting position. Now as you breathe out, lift your legs up as you keep them extended. Continue this movement until your legs are roughly parallel to the floor and then hold the contraction for a second. Tip: Do not use any momentum or swinging as you perform this exercise. Slowly go back to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variations: As you become more advanced you can start to rotate your pelvis forward at the top of the movement to really engage the lower abs. You may also straighten your legs to increase the difficulty of this movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Triceps Pushdown",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Attach a straight or angled bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the bar slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a V-angled bar that allows the thumb to be higher than the small finger. Also, you can attach a rope to the pulley as well as using a reverse grip on the bar exercises."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Low cable overhead triceps extension",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Attach a rope to a low pulley. After selecting an appropriate weight, grasp the rope with both hands and face away from the cable. Position your hands behind your head with your elbows point straight up. Your elbows should start out flexed, and you can stagger your stance and lean gently away from the machine to create greater stability. This will be your starting position. To perform the movement, extend through the elbow while keeping the upper arm in position, raising your hands above your head. Squeeze your triceps at the top of the movement, and slowly lower the weight back to the start position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm cable cross-over",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Begin by moving the pulleys to the high position, select the resistance to be used, and take a handle in each hand. Step forward in front of both pulleys with your arms extended in front of you, bringing your hands together. Your head and chest should be up as you lean forward, while your feet should be staggered. This will be your starting position. Keeping your left arm in place, allow your right arm to extend out to the side, maintaining a slight bend at the elbow. The right arm should be perpendicular to the body at approximately shoulder level. Return your arm back to the starting position by pulling your hand back to the midline of the body. Hold for a second at the starting position and repeat the movement on the opposite side. Continue alternating back and forth for the prescribed number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated dumbbell biceps curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Sit on a flat bench with a dumbbell on each hand being held at arms length. The elbows should be close to the torso. Rotate the palms of the hands so that they are facing your torso. This will be your starting position. While holding the upper arm stationary, curl the weights and start twisting the wrists once the dumbbells pass your thighs so that the palms of your hands face forward at the end of the movement. Make sure that you contract the biceps as you breathe out and make sure that only the forearms move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the dumbbells back to the starting position as your breathe in and as you rotate the wrists back to a neutral grip. Repeat for the recommended amount of repetitions.  Variations:  There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Battle ropes",
      type: "strength",
      muscle: "shoulders",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "For this exercise you will need a heavy rope anchored at its center 15-20 feet away. Standing in front of the rope, take an end in each hand with your arms extended at your side. This will be your starting position. Initiate the movement by rapidly raising one arm to shoulder level as quickly as you can. As you let that arm drop to the starting position, raise the opposite side. Continue alternating your left and right arms, whipping the ropes up and down as fast as you can."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dead bug reach",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Begin lying on your back with your hands extended above you toward the ceiling. Bring your feet, knees, and hips up to 90 degrees. Exhale hard to bring your ribcage down and flatten your back onto the floor, rotating your pelvis up and squeezing your glutes. Hold this position throughout the movement. This will be your starting position. Initiate the exercise by extending one leg, straightening the knee and hip to bring the leg just above the ground. Maintain the position of your lumbar and pelvis as you perform the movement, as your back is going to want to arch. Stay tight and return the working leg to the starting position. Repeat on the opposite side, alternating until the set is complete."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Rope Crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Kneel 1-2 feet in front of a cable system with a rope attached. After selecting an appropriate weight, grasp the rope with both hands reaching overhead. Your torso should be upright in the starting position. To begin, flex at the spine, attempting to bring your rib cage to your legs as you pull the cable down. Pause at the bottom of the motion, and then slowly return to the starting position. These can be done with twists or to the side to hit the obliques."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Palms-Up Dumbbell Wrist Curl Over A Bench",
      type: "strength",
      muscle: "forearms",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Start out by placing two dumbbells on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab both of the dumbbells with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Make sure to inhale during this part of the exercise. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting down by using your thighs as a resting position for your forearms. Your wrist can hang over your knees and the same movements as mentioned above can be performed. You can also use a barbell instead of a dumbbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell thruster",
      type: "strength",
      muscle: "glutes",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so. This will be your starting position. Begin to squat by flexing your hips and knees, lowering your hips between your legs. Maintain an upright, straight back as you descend as low as you can. At the bottom, reverse direction and squat by extending your knees and hips, driving through your heels. As you do so, press both kettlebells overhead by extending your arms straight up, using the momentum from the squat to help drive the weights upward. As you begin the next repetition, return the weights to the shoulders."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-Arm Push-Up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Begin laying prone on the ground. Move yourself into a position supporting your weight on your toes and one arm. Your working arm should be placed directly under the shoulder, fully extended. Your legs should be extended, and for this movement you may need a wider base, placing your feet further apart than in a normal push-up. Maintain good posture, and place your free hand behind your back. This will be your starting position. Lower yourself by allowing the elbow to flex until you touch the ground. Descend slowly, and reverse direction be extending the arm to return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Band Hip Adductions",
      type: "strength",
      muscle: "adductors",
      equipment: "bands",
      difficulty: "beginner",
      instructions: "Anchor a band around a solid post or other object. Stand with your left side to the post, and put your right foot through the band, getting it around the ankle. Stand up straight and hold onto the post if needed. This will be your starting position. Keeping the knee straight, raise your right legs out to the side as far as you can. Return to the starting position and repeat for the desired rep count. Switch sides."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm kettlebell clean",
      type: "strength",
      muscle: "hamstrings",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Place a kettlebell between your feet. As you bend down to grab the kettlebell, push your butt back and keep your eyes looking forward. Clean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so. Return the weight to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Preacher Hammer Dumbbell Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Place the upper part of both arms on top of the preacher bench as you hold a dumbbell in each hand with the palms facing each other (neutral grip). As you breathe in, slowly lower the dumbbells until your upper arm is extended and the biceps is fully stretched. As you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the dumbbells are at shoulder height. Squeeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions.  Variations:  This exercise can be performed using one arm at a time to better isolate your biceps or in alternating fashion. You can perform this exercise also using a low pulley instead of a dumbbell. In this case you will need to position the bench in front of the pulley."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternating Kettlebell Press",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so. Press one directly overhead by extending through the elbow, turning it so the palm faces forward while holding the other kettlebell stationary . Lower the pressed kettlebell to the starting position and immediately press with your other arm."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Split Squat with Dumbbells",
      type: "strength",
      muscle: "quadriceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Position yourself into a staggered stance with the rear foot elevated and front foot forward. Hold a dumbbell in each hand, letting them hang at the sides. This will be your starting position. Begin by descending, flexing your knee and hip to lower your body down. Maintain good posture througout the movement. Keep the front knee in line with the foot as you perform the exercise. At the bottom of the movement, drive through the heel to extend the knee and hip to return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing One-Arm Dumbbell Curl Over Incline Bench",
      type: "strength",
      muscle: "biceps",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Stand on the back side of an incline bench as if you were going to be a spotter for someone. Have a dumbbell in one hand and rest it across the incline bench with a supinated (palms up) grip. Position your non lifting hand at the corner or side of the incline bench. The chest should be pressed against the top part of the incline and your feet should be pressed against the floor at a wide stance. This is the starting position. While holding the upper arm stationary, curl the dumbbell upward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a second. Slowly begin to bring the dumbbells back to starting position as your breathe in. Repeat for the recommended amount of repetitions. Switch arms while performing this exercise.  Variation: You can perform this exercise also with a low pulley."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Olympic Plate Hand Squeeze",
      type: "strength",
      muscle: "forearms",
      equipment: "other",
      difficulty: "beginner",
      instructions: "To begin, stand straight while holding a weight plate by the ridge at arm's length in each hand using a neutral grip (palms facing in). You feet should be shoulder width apart from each other. This will be your starting position. Lower the plates until the fingers are nearly extended but can still hold weights. Inhale as you lower the plates. Now raise the plates back to the starting position as you exhale by closing your hands. Repeat for the recommended amount of repetitions prescribed in your program.  Variations: You can do both hands at the same time, alternate, or do one hand at a time."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm kettlebell snatch",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Place a kettlebell between your feet. Bend your knees and push your butt back to get in the proper starting position. Look straight ahead and swing the kettlebell back between your legs. Immediately reverse the direction and drive through with your hips and knees, accelerating the kettlebell upward. As the kettlebell rises to your shoulder rotate your hand and punch straight up, using momentum to receive the weight locked out overhead."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-grip barbell curl",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Hold a barbell with both hands, palms up and a few inches apart. Stand with your torso straight and your head up. Your feet should be about shoulder width and your elbows close to your torso. This will be your starting position. Tip: You will keep your upper arms and elbows stationary throughout the movement. Curl the bar up in a semicircular motion until the forearms touch your biceps. Exhale as you perform this portion of the movement and contract your biceps hard for a second at the top. Tip: Avoid bending the back or using swinging motions as you lift the weight. Only the forearms should move. Slowly go back down to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: Can also be done with a medium or wide grip, using dumbbells and cables."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing cable crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Attach a rope to a high pulley and select an appropriate weight. Stand with your back to the cable tower. Take the rope with both hands over your shoulders, holding it to your upper chest. This will be your starting position. Perform the movement by flexing the spine, crunching the weight down as far as you can. Hold the peak contraction for a moment before returning to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Leverage Incline Chest Press",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the top of the pectorals at the beginning of the motion. Your chest and head should be up and your shoulder blades retracted. This will be your starting position. Press the handles forward by extending through the elbow. After a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing barbell overhead triceps extension",
      type: "strength",
      muscle: "triceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "To begin, stand up holding a barbell or e-z bar using a pronated grip (palms facing forward) with your hands closer than shoulder width apart from each other. Your feet should be about shoulder width apart. Now elevate the barbell above your head until your arms are fully extended. Keep your elbows in. This will be your starting position. Keeping your upper arms close to your head and elbows in, perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step. Go back to the starting position by using the triceps to raise the barbell. Breathe out as you perform this step. Repeat for the recommended amount of repetitions.  Variations: Another way to perform this exercise is to use dumbbells or a triceps blaster bar. You can also use cables with a bar or rope attachment."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying cable triceps extension",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Lie on a flat bench and grasp the straight bar attachment of a low pulley with a narrow overhand grip. Tip: The easiest way to do this is to have someone hand you the bar as you lay down. With your arms extended, position the bar over your torso. Your arms and your torso should create a 90-degree angle. This will be your starting position. Lower the bar by bending at the elbow while keeping the upper arms stationary and elbows in. Go down until the bar lightly touches your forehead. Breathe in as you perform this portion of the movement. Flex the triceps as you lift the bar back to its starting position. Exhale as you perform this portion of the movement. Hold for a second at the contracted position and repeat for the recommended amount of repetitions.  Variations: You can also perform this exercise with a barbell, an E-Z bar, an E-Z bar cable attachment, and dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell Turkish Get-Up (Squat style)",
      type: "strength",
      muscle: "shoulders",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Lie on your back on the floor and press a kettlebell to the top position by extending the elbow. Bend the knee on the same side as the kettlebell. Keeping the kettlebell locked out at all times, pivot to the opposite side and use your non- working arm to assist you in driving forward to the lunge position. Using your free hand, push yourself to a seated position, then progressing to your feet. While looking up at the kettlebell, slowly stand up. Reverse the motion back to the starting position and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Crunch - Hands Overhead",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Lie on the floor with your back flat and knees bent with around a 60-degree angle between the hamstrings and the calves. Keep your feet flat on the floor and stretch your arms overhead with your palms crossed. This will be your starting position. Curl your upper body forward and bring your shoulder blades just off the floor. At all times, keep your arms aligned with your head, neck and shoulder. Don't move them forward from that position. Exhale as you perform this portion of the movement and hold the contraction for a second. Slowly lower down to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: For the most advanced lifters, a weighted plate can be held in your hands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Internal Rotation",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Sit next to a low pulley sideways (with legs stretched in front of you or crossed) and grasp the single hand cable attachment with the arm nearest to the cable. Tip: If you can adjust the pulleyâ€™s height, you can use a flat bench to sit on instead. Position the elbow against your side with the elbow bent at 90Â° and the arm pointing towards the pulley. This will be your starting position. Pull the single hand cable attachment toward your body by internally rotating your shoulder until your forearm is across your abs. You will be creating an imaginary semi-circle. Tip: The forearm should be perpendicular to your torso at all times. Slowly go back to the initial position. Repeat for the recommended amount of repetitions and then repeat the movement with the next arm.  Caution: Do not use heavy weights for this exercise as if you use too much you risk rotator cuff injury. Variations: You can use dumbbells for this movement as well as exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Leg Extensions",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "For this exercise you will need to use a leg extension machine. First choose your weight and sit on the machine with your legs under the pad (feet pointed forward) and the hands holding the side bars. This will be your starting position. Tip: You will need to adjust the pad so that it falls on top of your lower leg (just above your feet). Also, make sure that your legs form a 90-degree angle between the lower and upper leg. If the angle is less than 90-degrees then that means the knee is over the toes which in turn creates undue stress at the knee joint. If the machine is designed that way, either look for another machine or just make sure that when you start executing the exercise you stop going down once you hit the 90-degree angle. Using your quadriceps, extend your legs to the maximum as you exhale. Ensure that the rest of the body remains stationary on the seat. Pause a second on the contracted position. Slowly lower the weight back to the original position as you inhale, ensuring that you do not go past the 90-degree angle limit. Repeat for the recommended amount of times.  Variations: As mentioned at in the foot positioning section, you can use various foot positions in order to maximize stimulation of certain thigh areas. Also, you can perform the movement unilaterally (one leg at a time)."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close push-up to wide push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on the floor face down and body straight with your toes on the floor and the hands wider than shoulder width for a wide hand position and closer than shoulder width for a close hand position. Make sure you are holding your torso up at arms length. Lower yourself until your chest almost touches the floor as you inhale. Using your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.  Variations:  If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more.  See Also: Pushups"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm dumbbell triceps extension",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Grab a dumbbell and either sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs or stand up straight. Clean the dumbbell up to bring it to shoulder height and then extend the arm over your head so that the whole arm is perpendicular to the floor and next to your head. The dumbbell should be on top of you. The other hand can be kept fully extended to the side, by the waist, supporting the upper arm that has the dumbbell or grabbing a fixed surface. Rotate the wrist so that the palm of your hand is facing forward and the pinkie is facing the ceiling. This will be your starting position. Slowly lower the dumbbell behind your head as you hold the upper arm stationary. Inhale as you perform this movement and pause when your triceps are fully stretched. Return to the starting position by flexing your triceps as you breathe out. Tip: It is imperative that only the forearm moves. The upper arm should remain at all times stationary next to your head. Repeat for the recommended amount of repetitions and switch arms.  Variations: You can also do this using a rope instead of a dumbbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Butterfly",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Sit on the machine with your back flat on the pad. Take hold of the handles. Tip: Your upper arms should be positioned parallel to the floor; adjust the machine accordingly. This will be your starting position. Push the handles together slowly as you squeeze your chest in the middle. Breathe out during this part of the motion and hold the contraction for a second. Return back to the starting position slowly as you inhale until your chest muscles are fully stretched. Repeat for the recommended amount of repetitions.  Variations: You can use pulleys or an exercise band to perform this movement. Also, there is a variety of the Pec Deck Machine where you place your forearms on the pad, with the elbow and a 90 degree angle. You then squeeze your elbows together."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline dumbbell bench press",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other. Once you are laying down, move the dumbbells in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position. Bring down the weights slowly to your side as you breathe out. Keep full control of the dumbbells at all times. Tip: Throughout the motion, the forearms should always be perpendicular to the floor. As you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. If using really heavy weights, it is best if a partner gives them to you as you lay down. Variations: You can use an exercise band or a barbell to perform this exercise. Similar to the Dumbbell Bench Press but on a decline bench. This works more of the lower chest."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "V-up",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie flat on the floor (or exercise mat) on your back with your arms extended straight back behind your head and your legs extended also. This will be your starting position. As you exhale, bend at the waist while simultaneously raising your legs and arms to meet in a jackknife position. Tip: The legs should be extended and lifted at approximately a 35-45 degree angle from the floor and the arms should be extended and parallel to your legs. The upper torso should be off the floor. While inhaling, lower your arms and legs back to the starting position. Repeat for the recommended amount of repetitions.  Variation: If you are really advanced you could use a medicine ball for added resistance."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated face pull",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Sit on a low pulley row machine with a rope attachment. Grab the ends of the rope using a palms-down grip and sit with your back straight and your knees slightly bent. Tip: Keep your back almost completely vertical and your arms fully extended in front of you. This will be your starting position. While keeping your torso stationary, lift your elbows and start bending them as you pull the rope towards your neck while exhaling. Throughout the movement your upper arms should remain parallel to the floor. Tip: Continue this motion until your hands are almost next to your ears (the forearms will not be parallel to the floor at the end of the movement as they will be angled a bit upwards) and your elbows are out away from your sides. After holding for a second or so at the contracted position, come back slowly to the starting position as you inhale. Tip: Again, during no part of the movement should the torso move. Repeat for the recommended amount of repetitions.  Variation: You can use a straight bar attachment as well or a bench and exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Bulgarian split squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Start by standing about 2 to 3 feet in front of a flat bench with your back facing the bench. Have a barbell in front of you on the floor. Tip: Your feet should be shoulder width apart from each other. Bend the knees and use a pronated grip with your hands being wider than shoulder width apart from each other to lift the barbell up until you can rest it on your chest. Then lift the barbell over your head and rest it on the base of your neck. Move one foot back so that your toe is resting on the flat bench. Your other foot should be stationary in front of you. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. Tip: Make sure your back is straight and chest is out while performing this exercise. As you inhale, slowly lower your leg until your thigh is parallel to the floor. At this point, your knee should be over your toes. Your chest should be directly above the middle of your thigh. Leading with the chest and hips and contracting the quadriceps, elevate your leg back to the starting position as you exhale. Repeat for the recommended amount of repetitions. Switch legs and repeat the movement.  Variations: You can use a step up box to place your toes on to perform this exercise. You can even elevate the step up box. Note: the higher the step up box, the more difficult it is to perform this exercise. Caution: Keeping your balance with this exercise can be challenging. This is an advanced exercise and should not be performed unless you are an experienced weight lifter."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse-grip lat pull-down",
      type: "strength",
      muscle: "lats",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Sit down on a pull-down machine with a wide bar attached to the top pulley. Adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar. Grab the pull-down bar with the palms facing your torso (a supinated grip). Make sure that the hands are placed closer than the shoulder width. As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position. As you breathe out, pull the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the fully contracted position and keep the elbows close to your body. The upper torso should remain stationary as your bring the bar to you and only the arms should move. The forearms should do no other work other than hold the bar. After a second on the contracted position, while breathing in, slowly bring the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Repeat this motion for the prescribed amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Biceps Cable Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Stand up with your torso upright while holding a cable curl bar that is attached to a low pulley. Grab the cable bar at shoulder width and keep the elbows close to the torso. The palm of your hands should be facing up (supinated grip). This will be your starting position. While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle. Slowly begin to bring the curl bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variation: You can also perform this movement using an E-Z barbell attachment or single handles."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm cable seated row",
      type: "strength",
      muscle: "middle_back",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "To get into the starting position, first sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked. Lean over as you keep the natural alignment of your back and grab the single handle attachment with your left arm using a palms-down grip. With your arm extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lat as you hold the bar in front of you. The right arm can be kept by the waist. This is the starting position of the exercise. Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it as you rotate the wrist, so that by the time your hand is by your abdominals it is in a neutral position (palms facing the torso). Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in. Tip: Remember to rotate the wrist as you go back to the starting position so that the palms are facing down again. Repeat for the recommended amount of repetitions and then perform the same movement with the right hand.  Variations: You can perform this movement with a high pulley as well and standing up. You can also perform it doing a full rotation of the wrist. In other words, at the starting position you will have the palms of the hands facing down and at the end of the movement they will be facing up. Great movement to perform for a variety of purposes."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm kettlebell row",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Lie down on a flat bench with a dumbbell in one hand on top of your thigh. By using your thigh to help you get the dumbbell up, clean the dumbbell up so that you can hold it in front of you at shoulder width. Use the hand you are not lifting with to help position the dumbbell over you properly. Once at shoulder width, rotate your wrist forward so that the palm of your hand is facing away from you. This will be your starting position. Bring down the weights slowly to your side as you breathe in. Keep full control of the dumbbell at all times. Tip: Use the hand that you are not lifting with to help keep the dumbbell balance as you may struggle a bit at first. Only use your non-lifting hand if it is needed. Otherwise, keep it resting to the side. As you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions of your training program. Switch arms and repeat the movement.  Caution: When you are done, do not drop the dumbbell next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrist so that you can place the dumbbell on top of your thigh. When the dumbbell is touching your thigh simultaneously push your upper torso up (while pressing the dumbbell on your thigh) and also perform a slight kick forward with your legs (keeping the dumbbell on top of the thigh). By doing this combined movement, momentum will help you get back to a sitting position with the dumbbell still on top of your thigh. At this moment you can place the dumbbell on the floor."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Drag curl",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Grab a barbell with a supinated grip (palms facing forward) and get your elbows close to your torso and back. This will be your starting position. As you exhale, curl the bar up while keeping the elbows to the back as you \"Drag\" the bar up by keeping it in contact with your torso. Tip: As you can see, you will not be keeping the elbows pinned to your sides, but instead you will be bringing them back. Also, do not lift your shoulders. Slowly go back to the starting position as you keep the bar in contact with the torso at all times. Repeat for the recommended amount of repetitions.  Variations: You can use dumbbells or the smith machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline oblique crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "none",
      difficulty: "intermediate",
      instructions: "Secure your legs at the end of the decline bench and slowly lay down on the bench. Raise your upper body off the bench until your torso is about 35-45 degrees if measured from the floor. Put one hand beside your head and the other on your thigh. This will be your starting position. Raise your upper body slowly from the starting position while turning your torso to the left. Continue crunching up as you exhale until your right elbow touches your left knee. Hold this contracted position for a second. Tip: Focus on keeping your abs tight and keeping the movement slow and controlled. Lower your body back down slowly to the starting position as you inhale. After completing one set on the right for the recommended amount of repetitions, switch to your left side. Tip: Focus on really twisting your torso and feeling the contraction when you are in the up position.  Variations: You can perform this exercise on a flat surface or you can also alternate from side to side in each repetition."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell external shoulder rotation",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Lie sideways on a flat bench with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it. Bend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm. Tip: Keep the arm parallel to your torso. Now bend the elbow while keeping the upper arm stationary. In this manner, the forearm will be parallel to the floor and perpendicular to your torso (Tip: So the forearm will be directly in front of you). The upper arm will be stationary by your torso and should be parallel to the floor (aligned with your torso at all times). This will be your starting position. As you breathe out, externally rotate your forearm so that the dumbbell is lifted up in a semicircle motion as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is perpendicular to the floor and the torso pointing towards the ceiling. At this point you will hold the contraction for a second. As you breathe in, slowly go back to the starting position. Repeat for the recommended amount of repetitions and then switch to the other arm.  Caution: There is no need to go heavy with this exercise. Too much weight will cause rotator cuff injury. Variations: You can perform this exercise standing and with cables."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm bent-over cable rear delt fly",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Select a weight and hold the handle of the low pulley with your right hand. Bend at the waist until your torso is nearly parallel to the floor. Your legs should be slightly bent with your left hand placed on your lower left thigh. Your right arm should be hanging from your shoulder in front of you and with a slight bend at the elbow. This will be your starting position. Raise your right arm, elbow slightly bent, to the side until the arm is parallel to the floor and in line with your right ear. Breathe out as you perform this step. Slowly lower the weight back to the starting position as you breathe in. Repeat for the recommended amount of repetitions and repeat the movement with the other arm.  Variations: You can perform this exercise with dumbbells or exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm incline lateral raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Lie down sideways on an incline bench press with a dumbbell in the hand. Make sure the shoulder is pressing against the incline bench and the arm is lying across your body with the palm around your navel. Hold a dumbbell in your uppermost arm while keeping it extended in front of you parallel to the floor. This is your starting position. While keeping the dumbbell parallel to the floor at all times, perform a lateral raise. Your arm should travel straight up until it is pointing at the ceiling. Tip: Exhale as you perform this movement. Hold the dumbbell in the position and feel the contraction in the shoulders for a second. While inhaling lower the weight across your body back into the starting position. Repeat the movement for the prescribed amount of repetitions. Switch arms and repeat the movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline bar press sit-up",
      type: "strength",
      muscle: "abdominals",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "To begin, lie down on a bench with a barbell resting on your chest. Position your legs so they are secure on the extension of the abdominal bench. This is the starting position. While inhaling, tighten your abdominals and glutes. Simultaneously curl your torso as you do when performing a sit-up and press the barbell to an overhead position while exhaling. Tip: Use your arms to push the barbell out as you perform this exercise while still focusing on the abdominal muscles. Lower your upper body back down to the starting position while bringing the barbell back down to your torso. Remember to breathe in while lowering the body. Repeat for the recommended amount of repetitions.  Caution: It is best to have a spotter while performing this exercise so that it is easier to get the barbell and also get rid of it. Also, always start with an empty bar and do not use jerking motions at any time. Variations: You can also use a decline bench when you are more advanced."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell rear delt bent-over row",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Stand up straight while holding a barbell using a wide (higher than shoulder width) and overhand (palms facing your body) grip. Bend knees slightly and bend over as you keep the natural arch of your back. Let the arms hang in front of you as they hold the bar. Once your torso is parallel to the floor, flare the elbows out and away from your body. Tip: Your torso and your arms should resemble the letter \"T\". Now you are ready to begin the exercise. While keeping the upper arms perpendicular to the torso, pull the barbell up towards your upper chest as you squeeze the rear delts and you breathe out. Tip: When performed correctly, this exercise should resemble a bench press in reverse. Also, refrain from using your biceps to do the work. Focus on targeting the rear delts; the arms should only act as hooks. Slowly go back to the initial position as you breathe in. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise using a smith machine or a T-bar row. You can also use the low pulley as long as you use a wide grip bar attachment."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Calf Press",
      type: "strength",
      muscle: "calves",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Adjust the seat so that your legs are only slightly bent in the start position. The balls of your feet should be firmly on the platform. Select an appropriate weight, and grasp the handles. This will be your starting position. Straighten the legs by extending the knees, just barely lifting the weight from the stack. Your ankle should be fully flexed, toes pointing up. Execute the movement by pressing downward through the balls of your feet as far as possible. After a brief pause, reverse the motion and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell alternating renegade row",
      type: "strength",
      muscle: "middle_back",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Place two kettlebells on the floor about shoulder width apart. Position yourself on your toes and your hands as though you were doing a pushup, with the body straight and extended. Use the handles of the kettlebells to support your upper body. You may need to position your feet wide for support. Push one kettlebell into the floor and row the other kettlebell, retracting the shoulder blade of the working side as you flex the elbow, pulling it to your side. Then lower the kettlebell to the floor and begin the kettlebell in the opposite hand. Repeat for several reps."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bosu Ball Cable Crunch With Side Bends",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Connect a standard handle to each arm of a cable machine, and position them in the most downward position. Grab a Bosu Ball and position it in front and center of the cable machine. Lie down on the Bosu Ball with the small of your back arched around the ball. Your rear end should be close to the floor without touching it. With both hands, reach back and grab the handle of each cable. With your feet positioned in a wide stance, extend your arms straight out in front of you and in between your knees. Your hands should be at knee level. Keep your arms straight and in-line with the upward angle of the cable. Elevate your torso in a crunching motion without dropping or bending your arms. Maintain the rigid position with your arms. Slowly descend back to the starting position with your back arched around the Bosu Ball and your abdominals elongated. Repeat the same series of movements to failure. Once you reach failure, keep your abs tight and raise your torso into plank position so your back is elevated off the Bosu Ball. Lower your arms down to your side; keep them straight. Start doing alternating side bends; reach for your heels! This finishing movement will focus on your obliques.  Tip: Arch your back around the Bosu Ball before each rep to fully elongate your abdominals. This will provide a full range of motion and lengthen your muscle fibers, giving them a much fuller appearance."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Hammer Grip Incline DB Bench Press",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Lie back on an incline bench with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other. By using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them at shoulder width. Once at shoulder width, keep the palms of your hands with a neutral grip (palms facing each other). Keep your elbows flared out with the upper arms in line with the shoulders (perpendicular to the torso) and the elbows bent creating a 90-degree angle between the upper arm and the forearm. This will be your starting position. Now bring down the weights slowly to your side as you breathe in. Keep full control of the dumbbells at all times. As you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back in your thighs and then on the floor. This is the safest manner to dispose of the dumbbells.  Variations: You can use several angles on the incline bench if the bench you are using is adjustable. Another variation of this exercise is to perform it with the palms of the hands facing forward (which is the traditional manner). Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Wide-grip hands-elevated push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height. Place your hands on the bar, with your hands wider than shoulder width. Position your feet back from the bar with arms and body straight. Your arms should be perpendicular to the body. This will be your starting position. Keeping your body straight, lower your chest to the bar by bending the arms. Return to the starting position by extending the elbows, pressing yourself back up."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline Dumbbell Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other. Once you are laying down, move the dumbbells in front of you at shoulder width. The palms of the hands should be facing each other and the arms should be perpendicular to the floor and fully extended. This will be your starting position. As you breathe in and you keep the upper arms stationary (and elbows in), bring the dumbbells down slowly by moving your forearms in a semicircular motion towards you until your thumbs are next to your ears. Breathe in as you perform this portion of the movement. Lift the dumbbells back to the starting position by contracting the triceps and exhaling. Repeat for the recommended amount of repetitions.  Variations: You can use an e-z bar or barbell to perform this movement. You can also perform it on a flat bench as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Push-Ups With Feet On An Exercise Ball",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on the floor face down and place your hands about 36 inches apart from each other holding your torso up at arms length. Place your toes on top of an exercise ball. This will allow your body to be elevated. Lower yourself until your chest almost touches the floor as you inhale. Using your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.  Variations: Another way to perform this exercise is to use a flat bench to elevate your body instead of an exercise ball. See Also: Push-Up"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated cable shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 90 degrees to the body, with your head and chest up. The elbows should also be bent to about 90 degrees. This will be your starting position. Begin by extending through the elbow, pressing the handles together above your head. After pausing at the top, return the handles to the starting position. Ensure that you maintain tension on the cables. You can also execute this movement with your back off the pad and alternate hands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell hack squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "expert",
      instructions: "Stand up straight while holding a barbell behind you at arms length and your feet at shoulder width. Tip: A shoulder width grip is best with the palms of your hands facing back. You can use wrist wraps for this exercise for a better grip. This will be your starting position. While keeping your head and eyes up and back straight, squat until your upper thighs are parallel to the floor. Breathe in as you slowly go down. Pressing mainly with the heel of the foot and squeezing the thighs, go back up as you breathe out. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed with your heels slightly elevated on a small block. This is a good option for beginners who lack the flexibility to perform the exercise without it."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Feet-elevated push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on the floor face down and place your hands about 36 inches apart from each other holding your torso up at arms length. Place your toes on top of a flat bench. This will allow your body to be elevated. Note: The higher the elevation of the flat bench, the higher the resistance of the exercise is. Lower yourself until your chest almost touches the floor as you inhale. Using your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.  Variations: Another way to perform this exercise is to use an exercise ball to elevate your body instead of a flat bench. This adds a level of difficulty due to the instability provided. See Also: Push-Up"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Leverage Chest Press",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the bottom or middle of the pectorals at the beginning of the motion. Your chest and head should be up and your shoulder blades retracted. This will be your starting position. Press the handles forward by extending through the elbow. After a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Gironda Sternum Chins",
      type: "strength",
      muscle: "lats",
      equipment: "other",
      difficulty: "beginner",
      instructions: "Grasp the pull-up bar with a shoulder width underhand grip. Now hang with your arms fully extended and stick your chest out and lean back. Tip: You will be leaning back throughout the entire movement. This will be your starting position. Start pulling yourself towards the bar with your spine arched throughout the movement and your head leaning back as far away from the bar as possible. Exhale as you perform this portion of the movement. Tip: At the upper end of the movement, your hips and legs will be at about a 45-degree angle to the floor. Keep pulling until your collarbone passes the bar and your lower chest or sternum area touches it. Hold that contraction for a second. Tip: By the time you've completed this portion of the movement; your head will be parallel to the floor. Slowly start going back to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can perform this movement using a chin-assist machine if unable to do it without aid or have a spotter help you up. You can also use the pull-down machine instead even though due to the fact that the pull-down machine does not involve a lot of the stabilizer muscles needed for the chin-up, the exercise becomes less effective. Also, as you get more advanced, you can use a weight belt to increase resistance."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Exercise ball crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "exercise_ball",
      difficulty: "intermediate",
      instructions: "Lie on an exercise ball with your lower back curvature pressed against the spherical surface of the ball. Your feet should be bent at the knee and pressed firmly against the floor. The upper torso should be hanging off the top of the ball. The arms should either be kept alongside the body or crossed on top of your chest as these positions avoid neck strains (as opposed to the hands behind the back of the head position). Lower your torso into a stretch position keeping the neck stationary at all times. This will be your starting position. With the hips stationary, flex the waist by contracting the abdominals and curl the shoulders and trunk upward until you feel a nice contraction on your abdominals. The arms should simply slide up the side of your legs if you have them at the side or just stay on top of your chest if you have them crossed. The lower back should always stay in contact with the ball. Exhale as you perform this movement and hold the contraction for a second. As you inhale, go back to the starting position. Repeat for the recommended amount of repetitions.  Caution: Perform this exercise slowly and deliberately as it takes some getting used to. Also, do not be hasty and try to use weights on the first time; you'll have enough on your hands learning how to balance yourself. Also, if balance is an issue I recommend having a spotter next to you and also placing each of your feet under a 100-lb dumbbell for added stability. As you get more advanced you can hold a dumbbell or a weight plate (held at arms length) on top of your chest. However, you have to be very careful when adding weight to this exercise, because if you add too much too quickly you could get a hernia. Variations: You can perform this exercise with a low pulley behind you with a rope attached on its end. In this manner you can go ahead and add resistance easier. For this variation, you will need to hold on to the sides of the rope throughout the movement. I like to bring my arms forward to the point that the upper arms are almost parallel to my torso and the lower arms are facing back holding the rope."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated rear delt fly",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Place a couple of dumbbells looking forward in front of a flat bench. Sit on the end of the bench with your legs together and the dumbbells behind your calves. Bend at the waist while keeping the back straight in order to pick up the dumbbells. The palms of your hands should be facing each other as you pick them. This will be your starting position. Keeping your torso forward and stationary, and the arms slightly bent at the elbows, lift the dumbbells straight to the side until both arms are parallel to the floor. Exhale as you lift the weights. (Note: avoid swinging the torso or bringing the arms back as opposed to the side.) After a one second contraction at the top, slowly lower the dumbbells back to the starting position. Repeat for the recommended amount of repetitions.  Variation: This exercise can also be performed standing but those with lower back problems are better off performing this seated variety."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing face pull",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Facing a high pulley with a rope or dual handles attached, pull the weight directly towards your face, separating your hands as you do so. Keep your upper arms parallel to the ground."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Russian twist",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie down on the floor placing your feet either under something that will not move or by having a partner hold them. Your legs should be bent at the knees. Elevate your upper body so that it creates an imaginary V-shape with your thighs. Your arms should be fully extended in front of you perpendicular to your torso and with the hands clasped. This is the starting position. Twist your torso to the right side until your arms are parallel with the floor while breathing out. Hold the contraction for a second and move back to the starting position while breathing out. Now move to the opposite side performing the same techniques you applied to the right side. Repeat for the recommended amount of repetitions.  Variation: As you get more advanced, you can hold a weight with both arms for resistance."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Flat Bench Leg Pull-In",
      type: "strength",
      muscle: "abdominals",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Sit on a bench with the legs stretched out in front of you slightly below parallel and your arms holding on to the sides of the bench. Your torso should be leaning backwards around a 45-degree angle from the bench. This will be your starting position. Bring the knees in toward you as you move your torso closer to them at the same time. Breathe out as you perform this movement. After a second pause, go back to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can also perform this exercise on a mat on the floor just by placing your arms to the sides. In this case, the legs will be stretched and elevated slightly over the floor. Also, as you become more advanced you can hold a dumbbell in between your feet or attach a pulley to them for added resistance. However, you have to be very careful when adding weight to this exercise as if you add too much too quickly you could get a hernia."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell shrug",
      type: "strength",
      muscle: "traps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Stand up straight with your feet at shoulder width as you hold a barbell with both hands in front of you using a pronated grip (palms facing the thighs). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for a better grip. This will be your starting position. Raise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variations: You can also rotate your shoulders as you go up, going in a semicircular motion from front to rear. However this version is not good for people with shoulder problems. In addition, this exercise can be performed with the barbell behind the back, with dumbbells by the side, a smith machine or with a shrug machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing cable rear delt row",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Sit in the same position on a low pulley row station as you would if you were doing seated cable rows for the back. Attach a rope to the pulley and grasp it with an overhand grip. Your arms should be extended and parallel to the floor with the elbows flared out. Keep your lower back upright and slide your hips back so that your knees are slightly bent. This will be your starting position. Pull the cable attachment towards your upper chest, just below the neck, as you keep your elbows up and out to the sides. Continue this motion as you exhale until the elbows travel slightly behind the back. Tip: Keep your upper arms horizontal, perpendicular to the torso and parallel to the floor throughout the motion. Go back to the initial position where the arms are extended and the shoulders are stretched forward. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Variations: You can also perform this exercise using exercise bands or dumbbells. You can also perform this movement standing in front of a high pulley."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Flat Bench Lying Leg Raise",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie with your back flat on a bench and your legs extended in front of you off the end. Place your hands either under your glutes with your palms down or by the sides holding on to the bench. This will be your starting position. As you keep your legs extended, straight as possible with your knees slightly bent but locked raise your legs until they make a 90-degree angle with the floor. Exhale as you perform this portion of the movement and hold the contraction at the top for a second. Now, as you inhale, slowly lower your legs back down to the starting position.  Variations: You can also perform this exercise on the floor on top of an exercise mat. You can also add weight by holding a dumbbell in between your feet as you get more advanced."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Hack Squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Place the back of your torso against the back pad of the machine and hook your shoulders under the shoulder pads provided. Position your legs in the platform using a shoulder width medium stance with the toes slightly pointed out. Tip: Keep your head up at all times and also maintain the back on the pad at all times. Place your arms on the side handles of the machine and disengage the safety bars (which on most designs is done by moving the side handles from a facing front position to a diagonal position). Now straighten your legs without locking the knees. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section). Begin to slowly lower the unit by bending the knees as you maintain a straight posture with the head up (back on the pad at all times). Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly. Begin to raise the unit as you exhale by pushing the floor with mainly with the heel of your foot as you straighten the legs again and go back to the starting position. Repeat for the recommended amount of repetitions.  Variations: All foot variations discussed in the foot positioning section apply."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell skullcrusher",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Lie on a flat bench while holding two dumbbells directly in front of you. Your arms should be fully extended at a 90-degree angle from your torso and the floor. The palms should be facing in and the elbows should be tucked in. This is the starting position. As you breathe in and you keep the upper arms stationary with the elbows in, slowly lower the weight until the dumbbells are near your ears. At that point, while keeping the elbows in and the upper arms stationary, use the triceps to bring the weight back up to the starting position as you breathe out. Repeat for the recommended amount of repetitions.  Caution: This is an exercise that you need to be very careful with when selecting the weight. Too much weight with sloppy form and you could be looking at injured elbows. Also, if you suffer from elbow problems this exercise might be too harsh on your elbows, so you may need to look for a substitute such as a close-grip bench press. Variation: You can perform this exercise in an alternate fashion like alternate dumbbell curls."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Man-maker",
      type: "strength",
      muscle: "middle_back",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Position a pair of light-weight dumbbells in front of you, parallel to each other. Keeping your back flat, bend forward and squat down, grasping the dumbbells. This is your start position. Initiate the movement by kicking one leg back, then the other so that youâ€™re in the push-up position, holding onto the dumbbells. Your weight should be on your toes and hands. Do a one-arm row for each side, bringing your elbow up as high as you can. Hop your feet forward and rise up by cleaning the weights, bringing them up to shoulder level, palms facing forward as you hop a second time. Descend into a squat and explosively rise up, then press the weights overhead to full arm extension. Lower the dumbbells back to your shoulders, then bend over as you squat down to return the weights back to the floor in front of you. Repeat for reps."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Pallof press",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Connect a standard handle to a tower, andâ€”if possibleâ€”position the cable to shoulder height. If not, a low pulley will suffice. With your side to the cable, grab the handle with both hands and step away from the tower. You should be approximately armâ€™s length away from the pulley, with the tension of the weight on the cable. With your feet positioned hip-width apart and knees slightly bent, hold the cable to the middle of your chest. This will be your starting position. Press the cable away from your chest, fully extending both arms. You core should be tight and engaged. Hold the repetition for several seconds before returning to the starting position. At the conclusion of the set, repeat facing the other direction."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Knees tucked crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "To begin, lie down on the floor or an exercise mat with your back pressed against the floor. Your arms should be lying across your sides with the palms facing down. Your legs should be crossed by wrapping one ankle around the other. Slowly elevate your legs up in the air until your thighs are perpendicular to the floor with a slight bend at the knees. Note: Your knees and toes should be parallel to the floor as opposed to the thighs. Move your arms from the floor and cross them so they are resting on your chest. This is the starting position. While keeping your lower back pressed against the floor, slowly lift your torso. Remember to exhale while perform this part of the exercise. Slowly begin to lower your torso back down to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations: This exercise can be performed with a weighted plate resting across your chest with your arms holding it. This can be a bit challenging for those who have never performed this exercise with weights. Always try the exercise without weights before moving to weighted plates. You can also perform this exercise with your hands clasped behind your head. This is a great way to add variety to your routine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Straight-arm dumbbell pull-over",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Place a dumbbell standing up on a flat bench.   Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well.   Grasp the dumbbell with both hands and hold it straight over your chest at arms length. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position. Caution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face.   While keeping your arms straight, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.   At that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.   Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.   Caution: If you are new to this movement, have a spotter hand you the weight instead. If not, please ensure that the dumbbell does not fall on you as you arrange your torso to perform the exercise on the bench. Also, as I already mentioned, ensure that the dumbbell used is in perfect working condition. Old dumbbells in need of welding should never be used to perform this exercise. Variations:  You can perform this exercise using a barbell or an e-z bar instead of dumbbells. Also, if using dumbbells like Powerblocksâ„¢, just use a dumbbell on each hand with the palms of your hands facing each other."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Arms-crossed jump squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Cross your arms over your chest. With your head up and your back straight, position your feet at shoulder width. Keeping your back straight and chest up, squat down as you inhale until your upper thighs are parallel, or lower, to the floor. Now pressing mainly with the ball of your feet, jump straight up in the air as high as possible, using the thighs like springs. Exhale during this portion of the movement. When you touch the floor again, immediately squat down and jump again. Repeat for the recommended amount of repetitions.  Caution: Do not perform this movement if you have any knee or back injuries due to the impact involved. Also, make certain that your landings are controlled and that you land with your two feet straight (toes touching the floor first). The wrong landing can result in a sprained ligament. Variations: You can also perform this movement with a barbell resting on your shoulders or while holding dumbbells by your sides."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Decline Smith Press",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Place a decline bench underneath the Smith machine. Now place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Using a pronated grip that is wider than shoulder width, unlock the bar from the rack and hold it straight over you with your arms extended. This will be your starting position. As you inhale, lower the bar under control by allowing the elbows to flex, lightly contacting the torso. After a brief pause, bring the bar back to the starting position by extending the elbows, exhaling as you do so. Repeat the movement for the prescribed amount of repetitions. When the set is complete, lock the bar back in the rack."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Band Skull Crusher",
      type: "strength",
      muscle: "triceps",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Secure a band to the base of a rack or the bench. Lay on the bench so that the band is lined up with your head. Take hold of the band, raising your elbows so that the upper arm is perpendicular to the floor. With the elbow flexed, the band should be above your head. This will be your starting position. Extend through the elbow to straighten your arm, keeping your upper arm in place. Pause at the top of the motion, and return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Isometric Wipers",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Assume a push-up position, supporting your weight on your hands and toes while keeping your body straight. Your hands should be just outside of shoulder width. This will be your starting position. Begin by shifting your body weight as far to one side as possible, allowing the elbow on that side to flex as you lower your body. Reverse the motion by extending the flexed arm, pushing yourself up and then dropping to the other side. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable cross-over",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Begin by moving the pulleys to the high position, select the resistance to be used, and take a handle in each hand. Stand directly between both pulleys with your arms extended out to your sides. Your head and chest should be up while your arms form a â€œTâ€. This will be your starting position. Keeping the elbows extended, pull your arms straight to your sides. Return your arms back to the starting position after a pause at the peak contraction. Continue the movement for the prescribed number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "One Arm Pronated Dumbbell Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Lie flat on a bench while holding a dumbbell at arms length. Your arm should be perpendicular to your body. The palm of your hand should be facing towards your feet as a pronated grip is required to perform this exercise. Place your non lifting hand on your bicep for support. Slowly begin to lower the dumbbell down as you breathe in. Then, begin lifting the dumbbell upward as you contract the triceps. Remember to breathe out during the concentric (lifting part of the exercise). Repeat until you have performed your set repetitions. Switch arms and repeat the movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm kettlebell clean and jerk",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. Dip your body by bending the knees, keeping your torso upright. Immediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body's momentum to move the weight. Receive the weight overhead by returning to a squat position underneath the weight. Keeping the weight overhead, return to a standing position. Lower the weight to the floor to perform the next repetition."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Side To Side Chins",
      type: "strength",
      muscle: "lats",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Grab the pull-up bar with the palms facing forward using a wide grip. As you have both arms extended in front of you holding the bar at a wide grip, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position. Pull your torso up while leaning to the left hand side until the bar almost touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space (no swinging) and only the arms should move. The forearms should do no other work other than hold the bar. After a second of contraction, inhale as you go back to the starting position. Now, pull your torso up while leaning to the right hand side until the bar almost touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar. After a second of contraction, inhale as you go back to the starting position. Repeat steps 3-6 until you have performed the prescribed amount of repetitions for each side.  Caution: If you are new to this exercise and do not have the strength to perform it, using a spotter to hold your legs can help being that it requires putting a lot of stress on the rotator cuffs. Alternatively you can also use a chin assist machine. Variations: If you have developed enough strength to perform this exercise with weights, do so with caution. Side to side chins can be a challenging exercise and if not performed correctly, can cause injury. Before attempting to use weights, make sure you are able to perform the exercise with good form. You can also perform the side to side chins by doing all reps to one side and then the next or by also including the middle movement as well (in which case you would pull up first to the left hand side, then the middle and then the right side). You can use a chin assist machine if you do not have the strength to perform the exercise on your own."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline Dumbbell Bench With Palms Facing In",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Lie back on an incline bench with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other. By using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them at shoulder width. Once at shoulder width, keep the palms of your hands with a neutral grip (palms facing each other). Keep your elbows flared out with the upper arms in line with the shoulders (perpendicular to the torso) and the elbows bent creating a 90-degree angle between the upper arm and the forearm. This will be your starting position. Now bring down the weights slowly to your side as you breathe in. Keep full control of the dumbbells at all times. As you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back in your thighs and then on the floor. This is the safest manner to dispose of the dumbbells.  Variations: You can use several angles on the incline bench if the bench you are using is adjustable. Another variation of this exercise is to perform it with the palms of the hands facing forward (which is the traditional manner). Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated palms-down wrist curl",
      type: "strength",
      muscle: "forearms",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Start out by placing two dumbbells on the floor in front of a flat bench. Sit down on the edge of the flat bench with your legs at about shoulder width apart. Make sure to keep your feet on the floor. Use your arms to grab both of the dumbbells and bring them up so that your forearms are resting against your thighs with the palms of the hands facing down. Your wrists should be hanging over the edge of your thighs. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Make sure to inhale during this part of the exercise. Tip: Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions. When finished, simply lower the dumbbells to the floor.  Variations:  This exercise can also be performed using a barbell instead of a dumbbell. You can also focus on one arm at a time to isolate the forearms."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Clock push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Move into a prone position on the floor, supporting your weight on your hands and toes. Your arms should be fully extended with the hands around shoulder width. Keep your body straight throughout the movement. This will be your starting position. Descend by flexing at the elbow, lowering your chest toward the ground. At the bottom, reverse the motion by pushing yourself up through elbow extension as quickly as possible until you are air borne. Aim to â€œjumpâ€ 12-18 inches to one side. As you accelerate up, move your outside foot away from your direction of travel. Leaving the ground, shift your body about 30 degrees for the next repetition. Return to the starting position and repeat the exercise, working all the way around until you are back where you started."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine seated row",
      type: "strength",
      muscle: "lats",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Load an appropriate weight onto the pins and adjust the seat height so that the handles are at chest level. Grasp the handles with either a neutral or pronated grip. This will be your starting position. Pull the handles towards your torso, retracting your shoulder blades as you flex the elbow. Pause at the bottom of the motion, and then slowly return the handles to the starting position. For multiple repetitions, avoid completely returning the weight to the stops to keep tension on the muscles being worked."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying Face Up Plate Neck Resistance",
      type: "strength",
      muscle: "neck",
      equipment: "other",
      difficulty: "beginner",
      instructions: "Lie face up with your whole body straight on a flat bench while holding a weight plate on top of your forehead. Tip: You will need to position yourself so that your shoulders are slightly above the end of a flat bench in order for the traps, neck and head to be off the bench. This will be your starting position. While keeping the plate secure on your forehead slowly lower your head back in a semi-circular motion as you breathe in. Raise your head back up to the starting position in a semi-circular motion as you breathe out. Hold the contraction for a second. Repeat for the recommended amount of repetitions.  Caution: As with all exercises, refrain from using any sort of sudden or jerking motions. Variation: You can opt to use no resistance at first."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Weighted sissy squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Standing upright, with feet at shoulder width and toes raised, use one hand to hold onto the beams of a squat rack and the opposite arm to hold a plate on top of your chest. This is your starting position. As you use one arm to hold yourself, bend at the knees and slowly lower your torso toward the ground by bringing your pelvis and knees forward. Inhale as you go down and stop when your upper and lower legs almost create a 90-degree angle. Hold the stretch position for a second. After your one second hold, use your thigh muscles to bring your torso back up to the starting position. Exhale as you move up. Repeat for the recommended amount of times.  Caution: This exercise is to be avoided if you suffer from knee problems as it can stress the knee. Also, make sure that there is nothing behind you; as in the case that you lose your balance and fall, that way nothing will hit you on the head causing an injury. Variations: If you are new to this exercise, you can start by using two arms (so you'll need the two beams of the squat rack in front of you to hold yourself). As you become more advanced then just use one arm. Once that becomes easy, you can use the opposite arm to hold a plate on top of your chest."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Grab a dumbbell in each arm and stand up straight with your arms extended by your sides with a slight bend at the elbows and your back straight. This will be your starting position. Tip: The dumbbell should be next to your thighs with the palm of your hands facing back. Use your side shoulders to lift the dumbbells as you exhale. The dumbbells should be to the side of the body as you move them up. Continue to lift it until the dumbbells are nearly in line with your chin. Tip: Your elbows should drive the motion. As you lift the dumbbell, your elbow should always be higher than your forearm. Also, keep your torso stationary and pause for a second at the top of the movement. Lower the dumbbells back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Caution: Be very careful with how much weight you use in this exercise. Too much weight leads to bad form, which in turn can cause shoulder injury. I've seen this too many times so please no jerking, swinging and cheating. Also, if you suffer from shoulder problems, you may want to stay away from this movement and substitute by some form of lateral raises. Variations: This exercise can also be performed using a straight bar attached to a low pulley and it can also be performed using an e-z bar, cables and exercise band."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Palms-Down Dumbbell Wrist Curl Over A Bench",
      type: "strength",
      muscle: "forearms",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Start out by placing two dumbbells on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab both of the dumbbells with a pronated grip (palms facing down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting down by using your thighs as a resting position for your forearms. Your wrist can hang over your knees and the same movements as mentioned above can be performed. You can also use a barbell instead of a dumbbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "One Arm Supinated Dumbbell Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Lie flat on a bench while holding a dumbbell at arms length. Your arm should be perpendicular to your body. The palm of your hand should be facing towards your face as a supinated grip is required to perform this exercise. Place your non lifting hand on your bicep for support. Slowly begin to lower the dumbbell down as you breathe in. Then, begin lifting the dumbbell upward as you contract the triceps. Remember to breathe out during the concentric (lifting part of the exercise). Repeat until you have performed your set repetitions. Switch arms and repeat the movement. Switch arms again and repeat the movement.  Caution: When you are done, do not drop the dumbbell next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrist so that you can place the dumbbell on top of your thigh. When the dumbbell is touching your thigh simultaneously push your upper torso up (while pressing the dumbbell on your thigh) and also perform a slight kick forward with your legs (keeping the dumbbell on top of the thigh). By doing this combined movement, momentum will help you get back to a sitting position with the dumbbell still on top of your thigh. At this moment you can place the dumbbell on the floor."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell bent-over row",
      type: "strength",
      muscle: "middle_back",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "With a dumbbell in each hand (palms facing your torso), bend your knees slightly and bring your torso forward by bending at the waist; as you bend make sure to keep your back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The weights should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. While keeping the torso stationary, lift the dumbbells to your side (as you breathe out), keeping the elbows close to the body (do not exert any force with the forearm other than holding the weights). On the top contracted position, squeeze the back muscles and hold for a second. Slowly lower the weight again to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Caution:  This exercise is not recommended for people with back problems. A Low Pulley Row is a better choice for people with back issues. Ensure perfect form and never round the back as this can promote back injury. Be cautious with the weight used; in case of doubt, use less weight rather than more.  Variations: You can perform the same exercise using a low pulley instead with a v-bar or with a barbell. This exercise can also be performed with supinated or neutral grips."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell thruster",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Set the bar in a rack slightly below shoulder level so that when under it, your knees are slightly bent. Rest the bar on top of the front deltoids, pushing into the clavicles, and lightly touching the throat. Your hands should be in a clean grip, touching the bar only with your fingers to help keep it in position. To unrack the bar, push upward into it and push your hips forward. Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head and elbows up at all times. Your triceps should remain parallel with the ground. Keep a neutral neck and flat back. This will be your starting position. Descend into a squat by pushing your hips and butt back. Continue down until the upper legs are at or just below parallel to the floor. Inhale as you perform this portion of the movement. As you prepare to ascend, push through your heels and begin to wrap your fingers tightly around the bar for a firm grip. As you near the top of your squat, begin pressing the bar up towards the ceiling, allowing your neck to hyperextend so that the bar has room to move. A final position will be one in which your arms are fully extended overhead and your legs straight. Maintain tightness from head to toe. Lower the bar slowly, allowing your knees to bend to lessen the blow. Immediately transition back into the squatting movement to continue into the next repetition. Repeat for recommended number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Flutter Kicks",
      type: "strength",
      muscle: "glutes",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "On a flat bench lie facedown with the hips on the edge of the bench, the legs straight with toes high off the floor and with the arms on top of the bench holding on to the front edge. Squeeze your glutes and hamstrings and straighten the legs until they are level with the hips. This will be your starting position. Start the movement by lifting the left leg higher than the right leg. Then lower the left leg as you lift the right leg. Continue alternating in this manner (as though you are doing a flutter kick in water) until you have done the recommended amount of repetitions for each leg. Make sure that you keep a controlled movement at all times. Tip: You will breathe normally as you perform this movement.  Variations: As you get more advanced you can use ankle weights."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell sumo squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Hold a dumbbell at the base with both hands and stand straight up. Move your legs so that they are wider than shoulder width apart from each other with your knees slightly bent. Your toes should be facing out. Note: Your arms should be stationary while performing the exercise. This is the starting position. Slowly bend the knees and lower your legs until your thighs are parallel to the floor. Make sure to inhale as this is the eccentric part of the exercise. Press mainly with the heel of the foot to bring the body back to the starting position while exhaling. Repeat for the recommended amount of repetitions.  Caution: Failure to keep your back straight can result in back injury."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell upright row",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Grasp a barbell with an overhand grip that is slightly less than shoulder width. The bar should be resting on the top of your thighs with your arms extended and a slight bend in your elbows. Your back should also be straight. This will be your starting position. Now exhale and use the sides of your shoulders to lift the bar, raising your elbows up and to the side. Keep the bar close to your body as you raise it. Continue to lift the bar until it nearly touches your chin. Tip: Your elbows should drive the motion, and should always be higher than your forearms. Remember to keep your torso stationary and pause for a second at the top of the movement. Lower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed using a straight bar attached to a low pulley and it can also be performed using dumbbells, though this later exercise should be reserved by people that are well familiarized with correct execution."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Straight-Arm Pulldown",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "You will start by grabbing the wide bar from the top pulley of a pulldown machine and using a wider than shoulder-width pronated (palms down) grip. Step backwards two feet or so. Bend your torso forward at the waist by around 30-degrees with your arms fully extended in front of you and a slight bend at the elbows. If your arms are not fully extended then you need to step a bit more backwards until they are. Once your arms are fully extended and your torso is slightly bent at the waist, tighten the lats and then you are ready to begin. While keeping the arms straight, pull the bar down by contracting the lats until your hands are next to the side of the thighs. Breathe out as you perform this step. While keeping the arms straight, go back to the starting position while breathing in. Repeat for the recommended amount of repetitions.  Variations: Can also be performed with a shorter shoulder-width straight bar or with a rope attachment."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell stiff-legged deadlift",
      type: "strength",
      muscle: "hamstrings",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Grasp a bar using an overhand grip (palms facing down). You may need some wrist wraps if using a significant amount of weight. Stand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position. Keeping the knees stationary, lower the barbell to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Inhale as you perform this movement. Start bringing your torso up straight again by extending your hips until you are back at the starting position. Exhale as you perform this movement. Repeat for the recommended amount of repetitions.  Caution: This is not an exercise that is recommended for people with lower back problems. Also, it needs to be treated with the utmost respect paying special attention not to round the back forward as you move the torso down; the back should always be straight. Finally, jerking motions or doing too much weight can injure your back. Variations: The exercise can also be performed with a dumbbell as described above."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing One-Arm Dumbbell Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "To begin, stand up with a dumbbell held in one hand. Your feet should be about shoulder width apart from each other. Now fully extend the arm with the dumbbell over your head. Tip: The small finger of your hand should be facing the ceiling and the palm of your hand should be facing forward. The dumbbell should be above your head. This will be your starting position. Keeping your upper arm close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearm touch your bicep. Tip: The upper arm should remain stationary and only the forearm should move. Breathe in as you perform this step. Go back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step. Repeat for the recommended amount of repetitions. Switch arms and repeat the exercise.  Variation: You can perform this exercise with a rope attached to a low pulley."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine bench press",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Place a flat bench underneath the smith machine. Now place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the flat bench. Using a pronated grip that is wider than shoulder width, unlock the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your middle chest. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, lock the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Same as the Barbell Bench Press but with a Smith Machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Side Lateral Raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Pick a couple of dumbbells and sit at the end of a flat bench with your feet firmly on the floor. Hold the dumbbells with your palms facing in and your arms straight down at your sides at arms' length. This will be your starting position. While maintaining the torso stationary (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbells back down slowly to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed standing up."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Lying Rear Lateral Raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "While holding a dumbbell in each hand, lay with your chest down on a slightly inclined (around 15 degrees when measured from the floor) adjustable bench. Position the palms of the hands in a neutral manner (palms facing your torso) as you keep the arms extended with the elbows slightly bent. This will be your starting position. Now raise the arms to the side until your elbows are at shoulder height and your arms are roughly parallel to the floor as you exhale. Tip: Maintain your arms perpendicular to the torso while keeping them extended throughout the movement. Also, keep the contraction at the top for a second. Slowly lower the dumbbells to the starting position as you inhale. Repeat for the recommended amount of repetitions and then switch to the other arm.  Variations: You can perform this exercise with just one arm and also keeping the palms of the hands facing back as opposed to facing your torso."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell preacher curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Grab a dumbbell with each arm and place the upper arms on top of the preacher bench or the incline bench. The dumbbell should be held at shoulder length. This will be your starting position. As you breathe in, slowly lower the dumbbells until your upper arm is extended and the biceps is fully stretched. As you exhale, use the biceps to curl the weights up until your biceps is fully contracted and the dumbbells are at shoulder height. Squeeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions.  Variations: You can perform this exercise also using a low pulley instead of a dumbbell. In this case you will need to position the bench in front of the pulley. You can also use a barbell or an e-z bar."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Front Raise And Pullover",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Lie on a flat bench while holding a barbell using a palms down grip that is about 15 inches apart. Place the bar on your upper thighs, extend your arms and lock them while keeping a slight bend on the elbows. This will be your starting position. Now raise the weight using a semicircular motion and keeping your arms straight as you inhale. Continue the same movement until the bar is on the other side above your head . (Tip: the bar will travel approximately 180-degrees). At this point your arms should be parallel to the floor with the palms of your hands facing the ceiling. Now return the barbell to the starting position by reversing the motion as you exhale. Repeat for the recommended amount of repetitions.  Variations: You can use dumbbells also to perform this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Middle Back Shrug",
      type: "strength",
      muscle: "middle_back",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Lie facedown on an incline bench while holding a dumbbell in each hand. Your arms should be fully extended hanging down and pointing towards the floor. The palms of your hands should be facing each other. This will be your starting position. As you exhale, squeeze your shoulder blades together and hold the contraction for a full second. Tip: This movement is just like the reverse action of a hug, or trying to perform rear laterals as if you had no arms. As you inhale go back to the starting position. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline face-down bar front raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "e-z_curl_bar",
      difficulty: "intermediate",
      instructions: "Place a bar on the ground behind the head of an incline bench. Lay on the bench face down. With a pronated grip, pick the barbell up from the floor, keeping your arms straight. Allow the bar to hang straight down. This will be your starting position. To begin, raise the barbell out in front of your head while keeping your arms extended. Return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Butt-Ups",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Begin a pushup position but with your elbows on the ground and resting on your forearms. Your arms should be bent at a 90 degree angle. Arch your back slightly out rather than keeping your back completely straight. Raise your glutes toward the ceiling, squeezing your abs tightly to close the distance between your ribcage and hips. The end result will be that youâ€™ll end up in a high bridge position. Exhale as you perform this portion of the movement. Lower back down slowly to your starting position as you breathe in. Tip: Don't let your back sag downwards. Repeat for the recommended amount of repetitions.  Variations: None"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bodyweight Reverse Lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Begin in a standing position. Your hands should be on your hips or hanging at your sides. Look directly forward, keeping your chest up, with your feet shoulder-width apart. This will be your starting position. Initiate the movement by taking a step to the rear, allowing your hips and knees to flex to lower your body. Contacting the back leg through only the ball of the foot, descend until your knee nearly touches the ground. Use a slow and controlled motion, paying special attention to proper mechanics and posture. The knee should stay in line with the foot, and the thoracic spine should remain neutral. After a brief pause, return to the starting position by driving through the heel of the front leg to extend the knees and hips. This movement can be done completely on one side before switching, or can be performed in an alternating fashion."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated One-Arm Dumbbell Palms-Down Wrist Curl",
      type: "strength",
      muscle: "forearms",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Sit on a flat bench with a dumbbell in your right hand. Place your feet flat on the floor, at a distance that is slightly wider than shoulder width apart. Lean forward and place your right forearm on top of your upper right thigh with your palm down. Tip: Make sure that the back of the wrist lies on top of your knees. This will be your starting position. Lower the dumbbell as far as possible as you keep a tight grip on the dumbbell. Inhale as you perform this movement. Now curl the dumbbell as high as possible as you contract the forearms and as you exhale. Keep the contraction for a second before you lower again. Tip: The only movement should happen at the wrist. Perform for the recommended amount of repetitions, switch arms and repeat the movement.  Variations: You can also do this movement with two arms at a time, one on each knee, or using a barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Glute Kickback",
      type: "strength",
      muscle: "glutes",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Kneel on the floor or an exercise mat and bend at the waist with your arms extended in front of you (perpendicular to the torso) in order to get into a kneeling push-up position but with the arms spaced at shoulder width. Your head should be looking forward and the bend of the knees should create a 90-degree angle between the hamstrings and the calves. This will be your starting position. As you exhale, lift up your right leg until the hamstrings are in line with the back while maintaining the 90-degree angle bend. Contract the glutes throughout this movement and hold the contraction at the top for a second. Tip: At the end of the movement the upper leg should be parallel to the floor while the calf should be perpendicular to it. Go back to the initial position as you inhale and now repeat with the left leg. Continue to alternate legs until all of the recommended repetitions have been performed.  Variations: For this exercise you can also perform all of the repetitions with one leg first and then the other one. Additionally, you can also add ankle weights."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Plate Pinch",
      type: "strength",
      muscle: "forearms",
      equipment: "other",
      difficulty: "beginner",
      instructions: "Grab two wide-rimmed plates and put them together with the smooth sides facing outward Use your fingers to grip the outside part of the plate and your thumb for the other side thus holding both plates together. This is the starting position. Squeeze the plate with your fingers and thumb. Hold this position for as long as you can. Repeat for the recommended amount of sets prescribed in your program. Switch arms and repeat the movements.  Caution: Attempting to hold the weighted plate for too long can cause you to drop the plate. As a result, it may land on your feet or other areas which may cause an injury. So if you feel like the weight is about to slip out of your hand, slowly bend your knees while keeping your back straight and put the plates on the floor."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Yates Row Reverse Grip",
      type: "strength",
      muscle: "middle_back",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Hold a barbell with a supinated grip a bit more than shoulder-width apart. Keep your feet hip-width apart and your knees slightly bent. Bend forward at the waist slightly, and keep your back straight and your chest up. This will be your starting position. Pull the barbell to your torso by flexing the elbow and retracting the shoulder blades. Avoid jerking the weight backward by extending your back or hips. Reverse the motion to return the weight to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse-grip bench press",
      type: "strength",
      muscle: "triceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Lie back on a flat bench. Using a close, supinated grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked extended in front of you and perpendicular to the floor. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that as opposed to a regular bench press, you keep the elbows close to the torso at all times in order to maximize triceps involvement. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to fall around the area between the sternum and upper abs. Variation: This exercise can also be performed with an e-z bar using the inner handle as well as dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Leverage Decline Chest Press",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the bottom of the pectorals at the beginning of the motion. Your chest and head should be up and your shoulder blades retracted. This will be your starting position. Press the handles forward by extending through the elbow. After a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bench barbell roll-out",
      type: "strength",
      muscle: "abdominals",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Place a loaded barbell on the ground, near the end of a bench. Kneel with both legs on the bench, and take a medium to narrow grip on the barbell. This will be your starting position. To begin, extend through the hips to slowly roll the bar forward. As you roll out, flex the shoulder to roll the bar above your head. Ensure that your arms remain extended throughout the movement. When the bar has been moved as far forward as possible, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Push-Up Wide",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "With your hands wide apart, support your body on your toes and hands in a plank position. Your elbows should be extended and your body straight. Do not allow your hips to sag. This will be your starting position. To begin, allow the elbows to flex, lowering your chest to the floor as you inhale. Using your pectoral muscles, press your upper body back up to the starting position by extending the elbows. Exhale as you perform this step. After pausing at the contracted position, repeat the movement for the prescribed amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Exercise ball weighted hyperextension",
      type: "strength",
      muscle: "lower_back",
      equipment: "exercise_ball",
      difficulty: "beginner",
      instructions: "To begin, lie down on an exercise ball with your torso pressing against the ball and parallel to the floor. The ball of your feet should be pressed against the floor to help keep you balanced. Place a weighted plate under your chin or behind your neck. This is the starting position. Slowly raise your torso up by bending at the waist and lower back. Remember to exhale during this movement. Hold the contraction on your lower back for a second and lower your torso back down to the starting position while inhaling. Repeat for the recommended amount of repetitions prescribed in your program.  Caution: If you are new to this exercise, it is best to perform this exercise without any weights until you develop good form. Variations: You can use a regular hyperextension bench also or perform on a flat bench with someone holding your legs."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell behind-the-back shrug",
      type: "strength",
      muscle: "traps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Stand up straight with your feet at shoulder width as you hold a barbell with both hands behind your back using a pronated grip (palms facing back). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for better grip. This will be your starting position. Raise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps. The arms should remain stretched out at all times. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variations: You can also rotate your shoulders as you go up, going in a semicircular motion from rear to front. However this version is not good for people with shoulder problems. In addition, this exercise can be performed with the barbell in front of your thighs, with dumbbells by the side, a smith machine or with a shrug machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying Supine Dumbbell Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Lie down on a flat bench face up while holding a dumbbell in each arm on top of your thighs. Bring the dumbbells to the sides with the arms extended and the palms of the hands facing your thighs (neutral grip). While keeping the arms close to your torso and elbows in, slowly lower your arms (as you keep them extended with a slight bend at the elbows) as far down towards the floor as you can go. Once you cannot go down any further, lock your upper arms in that position and that will be your starting position. As you breathe out, slowly begin to curl the weights up as you simultaneously rotate your wrists so that the palms of the hands face up. Continue curling the weight until your biceps are fully contracted and squeeze hard at the top position for a second. Tip: Only the forearms should move. Upper arms should remain stationary and elbows should stay in throughout the movement. Return back to the starting position very slowly.  Caution: It is very important to use a weight that you can control throughout the movement and also to start with a slight bend in your elbows. It is very easy to injure the biceps tendon if improper form and or too much weight is used."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Internal Rotation with Band",
      type: "strength",
      muscle: "shoulders",
      equipment: "bands",
      difficulty: "beginner",
      instructions: "Choke the band around a post. The band should be at the same height as your elbow. Stand with your right side to the band a couple of feet away. Grasp the end of the band with your right hand, and keep your elbow pressed firmly to your side. We recommend you hold a pad or foam roll in place with your elbow to keep it firmly in position. With your upper arm in position, your elbow should be flexed to 90 degrees with your hand reaching away from your torso. This will be your starting position. Execute the movement by rotating your arm in a forehand motion, keeping your elbow in place. Continue as far as you are able, pause, and then return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine Preacher Curls",
      type: "strength",
      muscle: "biceps",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Sit down on the Preacher Curl Machine and select the weight. Place the back of your upper arms (your triceps) on the preacher pad provided and grab the handles using an underhand grip (palms facing up). Tip: Make sure that when you place the arms on the pad you keep the elbows in. This will be your starting position. Now lift the handles as you exhale and you contract the biceps. At the top of the position make sure that you hold the contraction for a second. Tip: Only the forearms should move. The upper arms should remain stationary and on the pad at all times. Lower the handles slowly back to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can use free weights (barbells and dumbbells) to perform this exercise on a preacher bench. Alternatively, you can use the pulley machine as well in conjunction with a preacher bench."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bottoms-Up Clean From The Hang Position",
      type: "strength",
      muscle: "forearms",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Initiate the exercise by standing upright with a kettlebell in one hand. Swing the kettlebell back forcefully and then reverse the motion forcefully.Crush the kettlebell handle as hard as possible and raise the kettlebell to your shoulder."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm kneeling lat pull-down",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Attach a single handle to a high pulley and make your weight selection. Kneel in front of the cable tower, taking the cable with one hand with your arm extended. This will be your starting position. Starting with your palm facing forward, pull the weight down to your torso by flexing the elbow and retract the shoulder blade. As you do so, rotate the wrist so that at the completion of the movement, your palm is now facing you. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Feet-elevated oblique crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie flat on the floor with your lower back pressed to the ground. For this exercise, you will need to put one hand beside your head and the other to the side against the floor. Make sure your feet are elevated and resting on a flat surface. Now lift the shoulder in which your hand is touching your head. Simply elevate your shoulder and body upward until you touch your knee. For example, if you have your right hand besides your head, then you want to elevate your body upwards until your right elbow touches your left knee. The same variation can be applied doing the inverse and using your left elbow to touch your right knee. After your knee touches your elbow, lower your body until you have reached the starting position. Remember to breathe in during the eccentric (lowering) part of the exercise and to breathe out during the concentric (upward) part of the exercise. Continue alternating in this manner until all of the recommended repetitions for each side have been completed.  Note: While you cannot add resistance to this exercise you can concentrate on perfect execution and slow speed."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Elevated Cable Rows",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Get a platform of some sort (it can be an aerobics or calf raise platform) that is around 4-6 inches in height. Place it on the seat of the cable row machine. Sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked. Lean over as you keep the natural alignment of your back and grab the V-bar handles. With your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise. Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in. Repeat for the recommended amount of repetitions.  Caution: Avoid swinging your torso back and forth as you can cause lower back injury by doing so. Variations: You can use a straight bar instead of a V-Bar and perform with a pronated grip (palms facing down-forward) or a supinated grip (palms facing up-reverse grip)."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline Dumbbell Flyes - With A Twist",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Hold a dumbbell in each hand and lie on an incline bench that is set to an incline angle of no more than 30 degrees. Extend your arms above you with a slight bend at the elbows. Now rotate the wrists so that the palms of your hands are facing you. Tip: The pinky fingers should be next to each other. This will be your starting position. As you breathe in, start to slowly lower the arms to the side while keeping the arms extended and while rotating the wrists until the palms of the hand are facing each other. Tip: At the end of the movement the arms will be by your side with the palms facing the ceiling. As you exhale start to bring the dumbbells back up to the starting position by reversing the motion and rotating the hands so that the pinky fingers are next to each other again. Tip: Keep in mind that the movement will only happen at the shoulder joint and at the wrist. There is no motion that happens at the elbow joint. Repeat for the recommended amount of repetitions.  Variations: You can perform regular flyes and also twisting flyes where your initial position starts with the thumbs facing each other instead of the pinky."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cross Over - With Bands",
      type: "strength",
      muscle: "chest",
      equipment: "bands",
      difficulty: "beginner",
      instructions: "Secure an exercise band around a stationary post. While facing away from the post, grab the handles on both ends of the band and step forward enough to create tension on the band. Raise your arms to the sides, parallel to the floor, perpendicular to your torso (your torso and the arms should resemble the letter \"T\") and with the palms facing forward. Have them extended with a slight bend at the elbows. This will be your starting position. While keeping your arms straight, bring them across your chest in a semicircular motion to the front as you exhale and flex your pecs. Hold the contraction for a second. Slowly return to the starting position as you inhale. Perform for the recommended amount of repetitions.  Variations: This exercise can also be performed using pulleys."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell iron cross squat",
      type: "strength",
      muscle: "shoulders",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "1. Stand with feet shoulder width apart holding a dumbbell in each hand. 2. Now lift the arms to your sides so that your torso and the arms form the letter \"T\". The arms should be parallel to the floor and perpendicular to each side of your torso. The palms should be facing forward. This will be your starting position. 3-a. As you inhale slowly squat down by bending at the knees and holding the back erect as if you were going to sit on a chair. Continue with the squat motion until your thighs are parallel to the floor. Tip: Remember that the knees should never go past your toes. 3-b. As you squat down, simultaneously bring the arms in front of you until the palms of the hands are facing each other. Tip: This will look like a flat bench flye but performed standing up. The arms will remain extended throughout the movement and only the shoulder joint will move. 4. Now start pressing with the ball of the foot mainly in order to go back to the initial position and simultaneously move the arms out away from your sides in order to form a giant \"T\" as you stand upright. Exhale as you perform this movement. 5. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Low-Pulley Deltoid Raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Start by standing to the right side of a low pulley row. Use your left hand to come across the body and grab a single handle attached to the low pulley with a pronated grip (palms facing down). Rest your arm in front of you. Your right hand should grab the machine for better support and balance. Make sure that your back is erect and your feet are shoulder width apart from each other. This is the starting position. Begin to use the left hand and come across your body out until it is elevated to shoulder height while exhaling. Feel the contraction at the top for a second and begin to slowly lower the handle back down to the original starting position while inhaling. Repeat for the recommended amount of repetitions. Switch arms and repeat the exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cobra Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Begin lying prone on the floor with your elbows bent and your finger tips in line with your chest. Extend your elbows and push your upper body and hips off the ground. When your elbows reach full extension, re-bend them and lower your body back to the ground. Repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Advanced Kettlebell Windmill",
      type: "strength",
      muscle: "abdominals",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Clean and press a kettlebell overhead with one arm. Keeping the kettlebell locked out at all times, push your butt out in the direction of the locked out kettlebell. Keep the non-working arm behind your back and turn your feet out at a forty-five degree angle from the arm with the kettlebell. Lower yourself as far as possible. Pause for a second and reverse the motion back to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell step-up",
      type: "strength",
      muscle: "quadriceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand up straight while holding a dumbbell on each hand (palms facing the side of your legs). Place the right foot on the elevated platform. Step on the platform by extending the hip and the knee of your right leg. Use the heel mainly to lift the rest of your body up and place the foot of the left leg on the platform as well. Breathe out as you execute the force required to come up. Step down with the left leg by flexing the hip and knee of the right leg as you inhale. Return to the original standing position by placing the right foot of to next to the left foot on the initial position. Repeat with the right leg for the recommended amount of repetitions and then perform with the left leg.  Note: This is a great exercise for people with lower back problems that are unable to do stiff legged deadlifts. Variations: Just like lunges, this exercise can also be performed by alternating between the right and the left leg every time until all repetitions have been performed for both legs. Also, a barbell can be used for resistance. Beginners can start with only the bodyweight, especially if they have balance issues."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine inverted row",
      type: "strength",
      muscle: "middle_back",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Position a bar in a rack to about waist height. You can also use a smith machine. Take a wider than shoulder width grip on the bar and position yourself hanging underneath the bar. Your body should be straight with your heels on the ground with your arms fully extended. This will be your starting position. Begin by flexing the elbow, pulling your chest towards the bar. Retract your shoulder blades as you perform the movement. Pause at the top of the motion, and return yourself to the start position. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bent-arm dumbbell pull-over",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Place a dumbbell standing up on a flat bench. Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well. Grasp the dumbbell with both hands and hold it straight over your chest with a bend in your arms. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position. Caution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face. While keeping your arms locked in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest. At that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement. Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.  Caution: If you are new to this movement, have a spotter hand you the weight instead. If not, please ensure that the dumbbell does not fall on you as you arrange your torso to perform the exercise on the bench. Also, as I already mentioned, ensure that the dumbbell used is in perfect working condition. Old dumbbells in need of welding should never be used to perform this exercise. Variations:  You can perform this exercise using a barbell or an e-z bar instead of dumbbells. Also, if using dumbbells like Powerblocksâ„¢, just use a dumbbell on each hand with the palms of your hands facing each other."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse-grip barbell curl",
      type: "strength",
      muscle: "biceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Stand up with your torso upright while holding a barbell at shoulder width with the elbows close to the torso. The palm of your hands should be facing down (pronated grip). This will be your starting position. While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations: You can also perform this movement using an E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You can also use an E-Z bar as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Cable Wood Chop",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Connect a standard handle to a tower, and move the cable to the highest pulley position. With your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately armâ€™s length away from the pulley, with the tension of the weight on the cable. Your outstretched arm should be aligned with the cable. With your feet positioned shoulder width apart, reach upward with your other hand and grab the handle with both hands. Your arms should still be fully extended. In one motion, pull the handle down and across your body to your front knee while rotating your torso. Keep your back and arms straight and core tight while you pivot your back foot and bend your knees to get a full range of motion. Maintain your stance and straight arms. Return to the neutral position in a slow and controlled manner. Repeat to failure. Then, reposition and repeat the same series of movements on the opposite side.  Tip: You will twist your entire body with this exercise, but really focus on getting maximal torso rotation and a strong clinch at the end of the movement. To ensure a good mind-muscle connection, keep your abs tense at all times."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Band Pull Apart",
      type: "strength",
      muscle: "shoulders",
      equipment: "bands",
      difficulty: "intermediate",
      instructions: "Begin with your arms extended straight out in front of you, holding the band with both hands. Initiate the movement by performing a reverse fly motion, moving your hands out laterally to your sides. Keep your elbows extended as you perform the movement, bringing the band to your chest. Ensure that you keep your shoulders back during the exercise. Pause as you complete the movement, returning to the starting position under control."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable rope hammer curl",
      type: "strength",
      muscle: "biceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Attach a rope attachment to a low pulley and stand facing the machine about 12 inches away from it. Grasp the rope with a neutral (palms-in) grip and stand straight up keeping the natural arch of the back and your torso stationary. Put your elbows in by your side and keep them there stationary during the entire movement. Tip: Only the forearms should move; not your upper arms. This will be your starting position. Using your biceps, pull your arms up as you exhale until your biceps touch your forearms. Tip: Remember to keep the elbows in and your upper arms stationary. After a 1 second contraction where you squeeze your biceps, slowly start to bring the weight back to the original position. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise with dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing crossed-cable rear delt fly",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Adjust the pulleys to the appropriate height and adjust the weight. The pulleys should be above your head. Grab the left pulley with your right hand and the right pulley with your left hand, crossing them in front of you. This will be your starting position. Initiate the movement by moving your arms back and outward, keeping your arms straight as you execute the movement. Pause at the end of the motion before returning the handles to the start position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell Turkish Get-Up (Lunge style)",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Lie on your back on the floor and press a kettlebell to the top position by extending the elbow. Bend the knee on the same side as the kettlebell. Keeping the kettlebell locked out at all times, pivot to the opposite side and use your non- working arm to assist you in driving forward to the lunge position. Using your free hand, push yourself to a seated position, then progressing to one knee. While looking up at the kettlebell, slowly stand up. Reverse the motion back to the starting position and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse Machine Flyes",
      type: "strength",
      muscle: "shoulders",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Adjust the handles so that they are fully to the rear. Make an appropriate weight selection and adjust the seat height so the handles are at shoulder level. Grasp the handles with your hands facing inwards. This will be your starting position. In a semicircular motion, pull your hands out to your side and back, contracting your rear delts. Keep your arms slightly bent throughout the movement, with all of the motion occurring at the shoulder joint. Pause at the rear of the movement, and slowly return the weight to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-leg kettlebell deadlift",
      type: "strength",
      muscle: "hamstrings",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Hold a kettlebell in one hand, hanging to the side. Stand on one leg, on the same side that you hold the kettlebell. Keeping that knee slightly bent, perform a stiff-legged deadlift by bending at the hip, extending your free leg behind you for balance. Continue lowering the kettlebell until you are parallel to the ground, and then return to the upright position. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine chest press",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Sit down on the Chest Press Machine and select the weight. Step on the lever provided by the machine since it will help you to bring the handles forward so that you can grab the handles and fully extend the arms. Grab the handles with a palms-down grip and lift your elbows so that your upper arms are parallel to the floor to the sides of your torso. Tip: Your forearms will be pointing forward since you are grabbing the handles. Once you bring the handles forward and extend the arms you will be at the starting position. Now bring the handles back towards you as you breathe in. Push the handles away from you as you flex your pecs and you breathe out. Hold the contraction for a second before going back to the starting position. Repeat for the recommended amount of reps. When finished step on the lever again and slowly get the handles back to their original place.  Variations: You can use free weights (barbells and dumbbells) to perform this exercise on a regular bench. Alternatively, you can use the pulley machine as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "One-Arm Kettlebell Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Place a kettlebell in front of your feet. Bend your knees slightly and then push your butt out as much as possible as you bend over to get in the starting position. Grab the kettlebell and pull it to your stomach, retracting your shoulder blade and flexing the elbow. Keep your back straight. Lower and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Mixed Grip Chin",
      type: "strength",
      muscle: "middle_back",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Using a spacing that is just about 1 inch wider than shoulder width, grab a pull-up bar with the palms of one hand facing forward and the palms of the other hand facing towards you. This will be your starting position. Now start to pull yourself up as you exhale. Tip: With the arm that has the palms facing up concentrate on using the back muscles in order to perform the movement. The elbow of that arm should remain close to the torso. With the other arm that has the palms facing forward, the elbows will be away but in line with the torso. You will concentrate on using the lats to pull your body up. After a second contraction at the top, start to slowly come down as you inhale. Repeat for the recommended amount of repetitions. On the following set, switch grips; so if you had the right hand with the palms facing you and the left one with the palms facing forward, on the next set you will have the palms facing forward for the right hand and facing you for the left.  Variations:  If you are new at this exercise and do not have the strength to perform it, use a chin assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. On the other hand, more advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bradford/Rocky Presses",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Sit on a Military Press Bench with a bar at shoulder level with a pronated grip (palms facing forward). Tip: Your grip should be wider than shoulder width and it should create a 90-degree angle between the forearm and the upper arm as the barbell goes down. This is your starting position. Once you pick up the barbell with the correct grip, lift the bar up over your head by locking your arms. Now lower the bar down to the back of the head slowly as you inhale. Lift the bar back up to the starting position as you exhale. Lower the bar down to the starting position slowly as you inhale. This is one repetition. Alternate in this manner until you complete the recommended amount of repetitions.  Variations: For more stress on the shoulders, only lift the bar until it is slightly above the head and then lower to the opposite side. In this manner you keep more constant tension on the shoulders while minimizing triceps involvement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline anti-gravity shoulder press",
      type: "strength",
      muscle: "shoulders",
      equipment: "e-z_curl_bar",
      difficulty: "intermediate",
      instructions: "Place a bar on the ground behind the head of an incline bench. Lay on the bench face down. With a pronated grip, pick the barbell up from the floor. Flex the elbows, performing a reverse curl to bring the bar near your chest. This will be your starting position. To begin, press the barbell out in front of your head by extending your elbows. Keep your arms parallel to the ground throughout the movement. Return to the starting position and repeat to complete the set."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell back squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Begin by loading the bar appropriately and stepping under it, placing it across the back of the shoulders slightly below the rear deltoids in a â€œlow-barâ€ position. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet in a wider-than-shoulder-width stance with the toes slightly pointed out and knees slightly bent. Keep your neck neutral. This will be your starting position. Descend into a squat by pushing your hips and butt backwards. Continue down until the upper legs are at or just below parallel to the floor. Inhale as you perform this portion of the movement. Descend into a squat by pushing your hips and butt backwards. Continue down until the upper legs are at or just below parallel to the floor. Inhale as you perform this portion of the movement. Drive up through your heels, pushing your feet and knees out. Continue upward, maintaining tightness head to toe, until you have returned to the starting position. Repeat for recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Neutral-grip pull-up",
      type: "strength",
      muscle: "lats",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Take a neutral grip on parallel pull-up bars, hanging freely with your arms extended. This will be your starting position. Pull yourself up by flexing the elbows and extending the glenohumeral joint. Do not swing or use momentum to complete the movement. Attempt to get your chin above your hands. Pause at the top of the motion before lowering yourself to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bodyweight triceps press",
      type: "strength",
      muscle: "triceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Position a bar in a rack at chest height. Standing, take a shoulder width grip on the bar and step a yard or two back, feet together and arms extended so that you are leaning on the bar. This will be your starting position. Begin by flexing the elbow, lowering yourself towards the bar. Pause, and then reverse the motion by extending the elbows. Progress from bodyweight by adding chains over your shoulders."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable reverse crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Connect an ankle strap attachment to a low pulley cable and position a mat on the floor in front of it. Sit down with your feet toward the pulley and attach the cable to your ankles. Lie down, elevate your legs and bend your knees at a 90-degree angle. Your legs and the cable should be aligned. If not, adjust the pulley up or down until they are. With your hands behind your head, bring your knees inward to your torso and elevate your hips off the floor. Pause for a moment and in a slow and controlled manner drop your hips and bring your legs back to the starting 90-degree angle. You should still have tension on your abs in the resting position. Repeat the same movement to failure.  Tip: Donâ€™t put pressure against your neck when your hands are behind your head. This position is only to keep your upper back slightly elevated so your upper abs engage. If you tweak your neck, then reposition your arms at your side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Hip Adduction",
      type: "strength",
      muscle: "quadriceps",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Stand in front of a low pulley facing forward with one leg next to the pulley and the other one away. Attach the ankle cuff to the cable and also to the ankle of the leg that is next to the pulley. Now step out and away from the stack with a wide stance and grasp the bar of the pulley system. Stand on the foot that does not have the ankle cuff (the far foot) and allow the leg with the cuff to be pulled towards the low pulley. This will be your starting position. Now perform the movement by moving the leg with the ankle cuff in front of the far leg by using the inner thighs to abduct the hip. Breathe out during this portion of the movement. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions and then repeat the same movement with the opposite leg.  Variations: You can use an inner thigh machine to perform this movement or you can also use ankle weights or an exercise band."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine-assisted pull-up",
      type: "strength",
      muscle: "lats",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Use an assisted pull-up machine or securely attach a heavy-duty band to a pull-up station, securing it around just one knee. The tension should be taut enough to pull that lower leg up. Grasp the bar with an overhand grip just outside shoulder width and hang at full arm extension. This is your start position. Keeping your body straight, contract your lats to pull yourself up as high as you can, driving your elbows down. Slowly release to full arm extension. Repeat for the required number of reps and safely dismount from the apparatus."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Cable Chest Press",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Position dual pulleys to chest height and select an appropriate weight. Stand a foot or two in front of the cables, holding one in each hand. You can stagger your stance for better stability. Position the upper arm at a 90 degree angle with the shoulder blades together. This will be your starting position. Keeping the rest of the body stationary, extend through the elbows to press the handles forward, drawing them together in front of you. Pause at the top of the motion, and return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying cable biceps curl",
      type: "strength",
      muscle: "biceps",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Grab a straight bar or E-Z bar attachment that is attached to the low pulley with both hands, using an underhand (palms facing up) shoulder-width grip. Lie flat on your back on top of an exercise mat in front of the weight stack with your feet flat against the frame of the pulley machine and your legs straight. With your arms extended and your elbows close to your body slightly bend your arms. This will be your starting position. While keeping your upper arms stationary and the elbows close to your body, curl the bar up slowly toward your chest as you breathe out and you squeeze the biceps. After a second squeeze at the top of the movement, slowly return to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can also perform this exercise with exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Back Extension",
      type: "strength",
      muscle: "lower_back",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Adjust the machine and select an appropriate load. Seat yourself with your upper back against the roller and grasp the handles with your feet planted firmly on the footrest. Your head should remain looking forward and your chest should be up. This will be your starting position. Initiate the movement by extending at the hips and lumbar spine to straighten your body, pushing the roller to the rear. At the top of the motion pause, and then return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Low Cable Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Select the desired weight and lay down face up on the bench of a seated row machine that has a rope attached to it. Your head should be pointing towards the attachment. Grab the outside of the rope ends with your palms facing each other (neutral grip). Position your elbows so that they are bent at a 90 degree angle and your upper arms are perpendicular (90 degree angle) to your torso. Tip: Keep the elbows in and make sure that the upper arms point to the ceiling while your forearms point towards the pulley above your head. This will be your starting position. As you breathe out, extend your lower arms until they are straight and vertical. The upper arms and elbows remain stationary throughout the movement. Only the forearms should move. Contract the triceps hard for a second. As you breathe in slowly return to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can perform the same movement using a flat bench and exercise bands or a low pulley that is set at the same level as your head is."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Head-on-bench dumbbell rear delt raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Stand up straight while holding a dumbbell in each hand and with an incline bench in front of you. While keeping your back straight and maintaining the natural arch of your back, lean forward until your forehead touches the bench in front of you. Let the arms hang in front of you perpendicular to the ground. The palms of your hands should be facing each other and your torso should be parallel to the floor. This will be your starting position. Keeping your torso forward and stationary, and the arms straight with a slight bend at the elbows, lift the dumbbells straight to the side until both arms are parallel to the floor. Exhale as you lift the weights. Caution: avoid swinging the torso or bringing the arms back as opposed to the side. After a one second contraction at the top, slowly lower the dumbbells back to the starting position. Repeat the recommended amount of repetitions.  Variations: This exercise can also be performed with cables or seating."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Pendlay Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Begin each repetition with the barbell dead on the ground. Take a medium pronated grip on the bar just in front of you. Your torso should be parallel to the ground with your lower back arched and knees partially bent. Begin with your shoulders protracted and your thoracic spine partially flexed. Your cervical spine should be neutral. This will be your starting position. Initiate the pull by extending your thoracic spine as you flex the elbow, attempting to pull the weight into your abdomen as quickly as possible. Focus on squeezing your shoulders back as you perform the movement retracting your shoulder blades. There should be no movement at the hips or knees and strict technique should be utilized. Return the weight to the ground between repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Clean",
      type: "strength",
      muscle: "hamstrings",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Begin standing with a dumbbell in each hand with your feet shoulder width apart. Lower the weights to the floor by flexing at the hips and knees, pushing your hips back until the dumbbells reach the floor. This will be your starting position. To initiate the movement, violently jump upward by extending the hips, knees, and ankles to acclerate the weights upward. Maintaining a neutral grip on the dumbbells, keep the arms straight until full extension is reached. After full extension, rebend the hips and knees to receive the weight in a squat position. Allow the arms to bend, guiding the dumbbells to your shoulders. Upon receiving the weight in the squat position, extend the hips and knees to finish in a standing position with the weights on your shoulders."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying rear delt fly",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "While holding a dumbbell in each hand, lay with your chest down on a flat bench. Position the palms of the hands in a neutral manner (palms facing your torso) as you keep the arms extended with the elbows slightly bent. This will be your starting position. Now raise the arms to the side until your elbows are at shoulder height and your arms are roughly parallel to the floor as you exhale. Tip: Maintain your arms perpendicular to the torso while keeping them extended throughout the movement. Also, keep the contraction at the top for a second. Slowly lower the dumbbells to the starting position as you inhale. Repeat for the recommended amount of repetitions and then switch to the other arm.  Variations: You can perform this exercise with just one arm and also keeping the palms of the hands facing back as opposed to facing your torso."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Bent-Over Two-Arm Dumbbell Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Sit down at the end of a flat bench with a dumbbell in both arms using a neutral grip (palms of the hand facing you). Bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up. The upper arms with the dumbbells should be close to the torso and aligned with it (lifted up until they are parallel to the floor while the forearms are pointing towards the floor as the hands hold the weights). Tip: There should be a 90-degree angle between the forearms and the upper arm. This is your starting position. Keeping the upper arms stationary, use the triceps to lift the weight as you exhale until the forearms are parallel to the floor and the whole arm is extended. Like many other arm exercises, only the forearm moves. After a second contraction at the top, slowly lower the dumbbells back to the starting position as you inhale. Repeat the movement for the prescribed amount of repetitions.  Variation:  This exercise can be executed also one arm at a time or alternating (like alternating dumbbell curls)"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Thigh abductor",
      type: "strength",
      muscle: "abductors",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "To begin, sit down on the abductor machine and select a weight you are comfortable with. When your legs are positioned properly, grip the handles on each side. Your entire upper body (from the waist up) should be stationary. This is the starting position. Slowly press against the machine with your legs to move them away from each other while exhaling. Feel the contraction for a second and begin to move your legs back to the starting position while breathing in. Note: Remember to keep your upper body stationary to prevent any injuries from occurring. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing barbell calf raise",
      type: "strength",
      muscle: "calves",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the bar on the back of your shoulders (slightly below the neck). Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. The knees should be kept with a slight bend; never locked. This will be your starting position. Tip: For better range of motion you may also place the ball of your feet on a wooden block but be careful as this option requires more balance and a sturdy block. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Caution: If you suffer from lower back problems, a better exercise is the calf press as during a standing calf raise the back has to support the weight being lifted. Also, maintain your back straight and stationary at all times. Rounding of the back can cause lower back injury. Variations: There are several other ways to perform a standing calf raise. A calf press machine instead of a squat rack can be used as well as dumbbells with one leg or two legs at a time. A smith machine can be used for calf raises as well. You can also perform the barbell calf raise using a piece of wood to place the ball of the foot. This will allow you to get a better range of motion. However be cautious as in this case you will need to balance yourself much better."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Romanian Deadlift",
      type: "strength",
      muscle: "hamstrings",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Hold a bar at hip level with a pronated (palms facing down) grip. Your shoulders should be back, your back arched, and your knees slightly bent. This will be your starting position. Lower the bar by moving your butt back as far as you can. Keep the bar close to your body, your head looking forward, and your shoulders back. Done correctly, you should reach the maximum range of your hamstring flexibility just below the knee. Any further movement will be compensation and should be avoided for this movement. At the bottom of your range of motion, return the starting position by driving the hips forward to stand up tall."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bent-knee reverse crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lay flat on the floor with your arms next to your sides. Now bend your knees at around a 75 degree angle and lift your feet off the floor by around 2 inches. Using your lower abs, bring your knees in towards you as you maintain the 75 degree angle bend in your legs. Continue this movement until you raise your hips off of the floor by rolling your pelvis backward. Breathe out as you perform this portion of the movement. Tip: At the end of the movement your knees will be over your chest. Squeeze your abs at the top of the movement for a second and then return to the starting position slowly as you breathe in. Tip: Maintain a controlled motion at all times. Repeat for the recommended amount of repetitions.  Variations: You can straighten your legs to make it harder or wear ankle weights."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable overhead triceps extension",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Attach a rope to the bottom pulley of the pulley machine. Grasping the rope with both hands, extend your arms with your hands directly above your head using a neutral grip (palms facing each other). Your elbows should be in close to your head and the arms should be perpendicular to the floor with the knuckles aimed at the ceiling. This will be your starting position. Slowly lower the rope behind your head as you hold the upper arms stationary. Inhale as you perform this movement and pause when your triceps are fully stretched. Return to the starting position by flexing your triceps as you breathe out. Repeat for the recommended amount of repetitions.  Variations: You can also do this seated with a bench that has back support, or you can use a dumbbell instead of the rope."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine bent-over row",
      type: "strength",
      muscle: "middle_back",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Set the barbell attached to the smith machine to a height that is about 2 inches below your knees. Bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. Now grasp the barbell using an overhand (pronated) grip and unlock it from the smith machine rack. Then let it hang directly in front of you as your arms hang extended perpendicular to the floor and your torso. This is your starting position. While keeping the torso stationary, lift the barbell as you breathe out, keeping the elbows close to the body and not doing any force with the forearm other than holding the weights. On the top contracted position, squeeze the back muscles and hold for a second. Slowly lower the weight again to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Caution:  This exercise is not recommended for people with back problems. A Low Pulley Row is a better choice for people with back issues. Also, just like with the bent knee deadlift, if you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more.  Variations: You can perform the same exercise using a supinated (palms facing you) grip. You can also use barbells and dumbbells. Similar to the Barbell Bent Over Row but with a Smith Machine bar instead."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable straight-bar upright row",
      type: "strength",
      muscle: "traps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Grasp a straight bar cable attachment that is attached to a low pulley with a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The bar should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position. Use your side shoulders to lift the cable bar as you exhale. The bar should be close to the body as you move it up. Continue to lift it until it nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the bar, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement. Lower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Caution: Be very careful with how much weight you use in this exercise. Too much weight leads to bad form, which in turn can cause shoulder injury. I've seen this too many times so please no jerking, swinging and cheating. Also, if you suffer from shoulder problems, you may want to stay away from upright rows and substitute by some form of lateral raises. Variations: This exercise can also be performed using a straight or e-z bar. Another variation is to use dumbbells, though this later exercise should be reserved by the most advanced people that are well familiarized with correct execution."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-grip dumbbell bench press",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Place a dumbbell standing up on a flat bench. Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench with only your shoulders lying on the surface. Hips should be below the bench and your legs bent with your feet firmly on the floor. Grasp the dumbbell with both hands and hold it straight over your chest at armâ€™s length. Both palms should be pressing against the underside of the sides of the dumbbell. This will be your starting position. Initiate the movement by lowering the dumbbell to your chest. Return to the starting position by extending the elbows."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Zercher squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. The correct height should be anywhere above the waist but below the chest. Once the correct height is chosen and the bar is loaded, lock your hands together and place the bar on top of your arms in between the forearm and upper arm. Lift the bar up so that it is resting on top of your forearms. If you are holding the bar properly, it should look as if you have your arms crossed but with a bar running across them. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section). Begin to lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly. Begin to raise the bar as you exhale by pushing the floor with the ball of your foot mainly as you straighten the legs again and go back to the starting position. Repeat for the recommended amount of repetitions.  Caution: This exercise is not to be taken lightly as you are applying a lot of pressure to your arms when lifting the barbell. It is always a good idea to have a spotter as they can help you keep proper form. Also, make sure that your back is kept straight as bending it can cause an injury."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Full Range-Of-Motion Lat Pulldown",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Either standing or seated on a high bench, grasp two stirrup cables that are attached to the high pulleys. Grab with the opposing hand so your arms are crisscrossed about you and your palms are facing forward. Keeping your chest up and maintaining a slight arch in your lower back, pull the handles down as if you were doing a regular pulldown. The range of motion will be more of an arc. During the movement, rotate your hands so that in the bottom position your palms face each other rather than forward. Return slowly to the starting position and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Shoulder Press",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Move the cables to the bottom of the towers and select an appropriate weight. Stand directly in between the uprights. Grasp the cables and hold them at shoulder height, palms facing forward. This will be your starting position. Keeping your head and chest up, extend through the elbow to press the handles directly over head. After pausing at the top, return to the starting position and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Russian Twists",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Connect a standard handle attachment, and position the cable to a middle pulley position. Lie on a stability ball perpendicular to the cable and grab the handle with one hand. You should be approximately armâ€™s length away from the pulley, with the tension of the weight on the cable. Grab the handle with both hands and fully extend your arms above your chest. You hands should be directly in-line with the pulley. If not, adjust the pulley up or down until they are. Keep your hips elevated and abs engaged. Rotate your torso away from the pulley for a full-quarter rotation. Your body should be flat from head to knees. Pause for a moment and in a slow and controlled manner reset to the starting position. You should still have side tension on the cable in the resting position. Repeat the same movement to failure. Then, reposition and repeat the same series of movements on the opposite side.  Tip: Itâ€™s extremely important to keep your hips elevated during this exercise. If you do it correctly, your upper back will be on the ball, but your lower back and rear-end will be completely unsupported. Keeping your hips elevated will engage your core (lower back and abdominals), and make the exercise more effective."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "EZ-bar skullcrusher-",
      type: "strength",
      muscle: "triceps",
      equipment: "e-z_curl_bar",
      difficulty: "intermediate",
      instructions: "Lie on a flat bench with either an e-z bar (my preference) or a straight bar placed on the floor behind your head and your feet on the floor. Grab the bar behind you, using a medium overhand (pronated) grip, and raise the bar in front of you at arms length. Tip: The arms should be perpendicular to the torso and the floor. The elbows should be tucked in. This is the starting position. As you breathe in, slowly lower the weight until the bar lightly touches your forehead while keeping the upper arms and elbows stationary. At that point, use the triceps to bring the weight back up to the starting position as you breathe out. Repeat for the recommended amount of repetitions.  Caution: This is an exercise that you need to be very careful with when selecting the weight. Also, if you suffer from elbow problems this exercise might be too harsh on your elbows, so you may need to look for a substitute. Variations:  There are a few variations of this exercise. You can perform it on a decline bench as opposed to a flat bench. You can also perform it using dumbbells in which case the palms of the hands will be facing each other as opposed to facing forward. Also, you can try to do it using a revere grip (palms facing you) but this variation seems to strain my wrists."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Stiff Leg Barbell Good Morning",
      type: "strength",
      muscle: "lower_back",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. Keeping your legs stationary, move your torso forward by bending at the hips while inhaling. Lower your torso until it is parallel with the floor. Begin to raise the bar as you exhale by elevating your torso back to the starting position. Repeat for the recommended amount of repetitions.  Caution: This is not an exercise to be taken lightly. Be cautious with the weight used; in case of doubt, use less weight rather than more. The stiff-legged barbell good morning is a very safe exercise but only if performed properly."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Dumbbell Reverse Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "To begin, stand straight with a dumbbell in each hand using a pronated grip (palms facing down). Your arms should be fully extended while your feet are shoulder width apart from each other. This is the starting position. While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the muscle. Slowly begin to bring the dumbbells back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations: You can also perform this movement using a straight bar or an E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying Close-Grip Barbell Triceps Press To Chin",
      type: "strength",
      muscle: "triceps",
      equipment: "e-z_curl_bar",
      difficulty: "beginner",
      instructions: "While holding a barbell or EZ Curl bar with a pronated grip (palms facing forward), lie on your back on a flat bench with your head off the end of the bench. Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles. Extend your arms in front of you as you hold the barbell over your chest. The arms should be perpendicular to your torso (90-degree angle). This will be your starting position. As you inhale, lower the bar in a semi-circular motion by bending at the elbows and while keeping the upper arm stationary and elbows in. Keep lowering the bar until it lightly touches your chin. As you exhale bring the bar back up to the starting position by pushing the bar up in a semi-circular motion. Contract the triceps hard at the top of the movement for a second. Tip: Again, only the forearms should move. The upper arms should remain stationary at all times. Repeat for the recommended amount of repetitions.  Variation: You can use dumbbells to make the exercise more challenging."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Tate Press",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Lie down on a flat bench with a dumbbell in each hand on top of your thighs. The palms of your hand will be facing each other. By using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them in front of you at shoulder width. Note: when holding the dumbbells in front of you, make sure your arms are wider than shoulder width apart from each other using a pronated (palms forward) grip. Allow your elbows to point out. This is your starting position. Keeping the upper arms stationary, slowly move the dumbbells in and down in a semi circular motion until they touch the upper chest while inhaling. Keep full control of the dumbbells at all times and do not move the upper arms nor rest the dumbbells on the chest. As you breathe out, move the dumbbells up using your triceps and the same semi-circular motion but in reverse. Attempt to keep the dumbbells together as they move up. Lock your arms in the contracted position, hold for a second and then start coming down again slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Back Flyes - With Bands",
      type: "strength",
      muscle: "shoulders",
      equipment: "bands",
      difficulty: "beginner",
      instructions: "Run a band around a stationary post like that of a squat rack. Grab the band by the handles and stand back so that the tension in the band rises. Extend and lift the arms straight in front of you. Tip: Your arms should be straight and parallel to the floor while perpendicular to your torso. Your feet should be firmly planted on the floor spread at shoulder width. This will be your starting position. As you exhale, move your arms to the sides and back. Keep your arms extended and parallel to the floor. Continue the movement until the arms are extended to your sides. After a pause, go back to the original position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise on a rear delt machine as well or using a pulley machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Ab Crunch Machine",
      type: "strength",
      muscle: "abdominals",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Select a light resistance and sit down on the ab machine placing your feet under the pads provided and grabbing the top handles. Your arms should be bent at a 90 degree angle as you rest the triceps on the pads provided. This will be your starting position. At the same time, begin to lift the legs up as you crunch your upper torso. Breathe out as you perform this movement. Tip: Be sure to use a slow and controlled motion. Concentrate on using your abs to move the weight while relaxing your legs and feet. After a second pause, slowly return to the starting position as you breathe in. Repeat the movement for the prescribed amount of repetitions.  Caution:  For this exercise, always select a weight that you can easily handle as using too much weight can easily lead to injury."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternating heel-touch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on the floor with the knees bent and the feet on the floor around 18-24 inches apart. Your arms should be extended by your side. This will be your starting position. Crunch over your torso forward and up about 3-4 inches to the right side and touch your right heel as you hold the contraction for a second. Exhale while performing this movement. Now go back slowly to the starting position as you inhale. Now crunch over your torso forward and up around 3-4 inches to the left side and touch your left heel as you hold the contraction for a second. Exhale while performing this movement and then go back to the starting position as you inhale. Now that both heels have been touched, that is considered 1 repetition. Continue alternating sides in this manner until all prescribed repetitions are done.  Variations: None"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith Machine Incline Bench Press",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Place an incline bench underneath the smith machine. Place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the incline bench and make sure your upper chest is aligned with the barbell. Using a pronated grip (palms facing forward) that is wider than shoulder width, unlock the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your upper chest. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter as this exercise can be a bit challenging. If no spotter is available, then be conservative with the amount of weight used. Same as the Barbell Incline Bench Press but with a Smith Machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine Shoulder (Military) Press",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Sit down on the Shoulder Press Machine and select the weight. Grab the handles to your sides as you keep the elbows bent and in line with your torso. This will be your starting position. Now lift the handles as you exhale and you extend the arms fully. At the top of the position make sure that you hold the contraction for a second. Lower the handles slowly back to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can use free weights (barbells and dumbbells) to perform this exercise on a military bench."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Fire Hydrant",
      type: "strength",
      muscle: "abductors",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Position yourself on your hands and knees on the ground. This will be your starting position. Keeping the knee in a bent position, abduct the femur, moving your knee away from the midline of the body. Pause at the top of the motion, and then slowly return to the starting position. Perform this slowly for a number of repetitions, and repeat on the other side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cuban press",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Take a dumbbell in each hand with a pronated grip in a standing position. Raise your upper arms so that they are parallel to the floor, allowing your lower arms to hang in the \"scarecrow\" position. This will be your starting position. To initiate the movement, externally rotate the shoulders to move the upper arm 180 degrees. Keep the upper arms in place, rotating the upper arms until the wrists are directly above the elbows, the forearms perpendicular to the floor. Now press the dumbbells by extending at the elbows, straightening your arms overhead. Return to the starting position as you breathe in by reversing the steps. Repeat for the recommended amount of repetitions.  Variation: You can also use a barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse Flyes With External Rotation",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "To begin, lie down on an incline bench set at a 30-degree angle with the chest and stomach pressing against the incline. Have the dumbbells in each hand with the palms facing down to the floor. Your arms should be in front of you so that they are perpendicular to the angle of the bench. Tip: Your elbows should have a slight bend. The legs should be stationary while applying pressure with the ball of your toes (your heels should not be touching the floor). This is the starting position. Maintaining the slight bend of the elbows, move the weights out and away from each other in an arc motion while exhaling. As you lift the weight, your wrist should externally rotate by 90-degrees so that you go from a palms down (pronated) grip to a palms facing each other (neutral) grip. Tip: Try to squeeze your shoulder blades together to get the best results from this exercise. The arms should be elevated until they are level with the head. Feel the contraction and slowly lower the weights back down to the starting position while inhaling. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Hanging wind sprint",
      type: "strength",
      muscle: "abdominals",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Hang from a pull-up bar using a pronated grip. Your arms and legs should be extended. This will be your starting position. Begin by quickly raising one knee as high as you can. Do not swing your body or your legs.3 Immediately reverse the motion, returning that leg to the starting position. Simultaneously raise the opposite knee as high as possible. Continue alternating between legs until the set is complete."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bent-arm barbell pull-over",
      type: "strength",
      muscle: "lats",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Lie on a flat bench with a barbell using a shoulder grip width. Hold the bar straight over your chest with a bend in your arms. This will be your starting position. While keeping your arms in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest. At that point, bring the barbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement. Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.  Variations:  You can perform this exercise using a dumbbell or an E-Z bar instead of dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Sphinx push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Assume a plank position on the ground. You should be supporting your body weight on your toes and forearms keeping your torso straight. Your forearms should be shoulder-width apart. This will be your starting position. Pressing your palms firmly into the ground, extend through the elbows to raise your body from the ground. Keep your torso rigid as you perform the movement. Slowly lower your forearms back to the ground by allowing the elbows to flex. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith Machine Close-Grip Bench Press",
      type: "strength",
      muscle: "chest",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Place a flat bench underneath the smith machine. Place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the flat bench. Using a close and pronated grip (palms facing forward) that is around shoulder width, unlock the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that as opposed to a regular bench press, you keep the elbows close to the torso at all times in order to maximize triceps involvement. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, lock the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter as this exercise can be a bit challenging. If no spotter is available, then be conservative with the amount of weight used. Variations: This exercise can also be performed with a barbell or e-z bar using the inner handle as well as dumbbells in which case the palms of the hands will be facing each other. Same as the Barbell Close-Grip Bench Press but with a Smith Machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Palms-out incline biceps curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Hold a dumbbell in each hand and lie back on an incline bench. The dumbbells should be at arm's length hanging at your sides and your palms should be facing out. This will be your starting position. Now as you exhale curl the weight outward and up while keeping your forearms in line with your side deltoids. Continue the curl until the dumbbells are at shoulder height and to the sides of your deltoids. Tip: The end of the movement should look similar to a double biceps pose. After a second contraction at the top of the movement, start to inhale and slowly lower the weights back to the starting position using the same path used to bring them up. Repeat for the recommended amount of repetitions.  Variations: You can also perform this exercise with cables or exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternating Cable Shoulder Press",
      type: "strength",
      muscle: "shoulders",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Move the cables to the bottom of the tower and select an appropriate weight. Grasp the cables and hold them at shoulder height, palms facing forward. This will be your starting position. Keeping your head and chest up, extend through the elbow to press one side directly over head. After pausing at the top, return to the starting position and repeat on the opposite side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Romanian Deadlift with Kettlebell",
      type: "strength",
      muscle: "hamstrings",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Begin in a standing position with a kettlebell held with both hands. Ensure that your back is straight and stays that way for the duration of the exercise. Allow your arms to hang perpendicular to the floor, with the wrists pronated and the elbows pointed to your sides. This will be your starting position. Initiate the movement by flexing your hips, slowly pushing your butt as far back as you can. This should entail a horizontal movement of the hips, rather than a downward movement. The knees should only partially bend, and your weight should remain on your heels. Drive your butt back as far as you can, which should generate tension in your hamstrings as your hands approach knee level. Maintain an arch in your back throughout the exercise. When your hips cannot perform any further backward movement, pause, and then slowly return to the starting position by extending the hips."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine leg press",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Position a Smith machine bar a couple feet off of the ground. Ensure that it is resting on the safeties. After loading the bar to an appropriate weight, lie underneath the bar. Place the middle of your feet on the bar, tucking your knees to your chest. This will be your starting position. Begin the movement by driving through your feet to move the bar upward, extending the hips and knees. Do not lock out your knees. At the top of the motion, pause briefly before returning to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Jefferson Squats",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Place a barbell on the floor. Stand in the middle of the bar length wise. Bend down by bending at the knees and keeping your back straight and grasp the front of the bar with your right hand. Your palm should be in (neutral grip) facing the left side. Grasp the rear of the bar with your left hand. The palm of your hand should be in neutral grip alignment (palms facing the right side). Tip: Ensure that your grip is even on the bar. Your torso should be positioned right in the middle of the bar and the distance between your torso and your right hand (which should be at the front) should be the same as the distance between your torso and your left hand (which should be to your back). Now stand straight up with the weight. Tip: Your feet should be shoulder width apart and your toes slightly pointed out. Squat down by bending at the knees and keeping your back straight until your upper thighs are parallel with the floor. Tip: Keep your back as vertical as possible with the floor and your head up. Also remember to not let your knees go past your toes. Inhale during this portion of the movement. Now drive yourself back up to the starting position by pushing with the feet . Tip: Keep the bar hanging at arm's length and your elbows locked with a slight bend. The arms only serve as hooks. Avoid doing any lifting with them. Do the lifting with your thighs; not your arms.  Variations: You can also perform the exercise using wrist wraps. In addition, you can use many of the other squat variations. Finally, you can also perform the exercise with a wide stance or a closer stance."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm low cable triceps extension",
      type: "strength",
      muscle: "triceps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Grab a single handle with your left arm next to the low pulley machine. Turn away from the machine keeping the handle to the side of your body with your arm fully extended. Now use both hands to elevate the single handle directly above the head with the palm facing forward. Keep your upper arm completely vertical (perpendicular to the floor) and put your right hand on your left elbow to help keep it steady. This is the starting position. Keeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step. Go back to the starting position by using the triceps to raise the single handle. Breathe out as you perform this step. Repeat for the recommended amount of repetitions. Switch arms and repeat the exercise.  Variation: Another way to perform this exercise is to use the end of a rope attachment."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine straight-legged hip raise",
      type: "strength",
      muscle: "abdominals",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Position a bench in the rack and load the bar to an appropriate weight. Lie down on the bench, placing the bottom of your feet against the bar. Unlock the bar and extend your legs. You may need to use your hands to assist you. For added stability grasp the sides of the Smith Machine. This will be your starting position. Initiate the movement by rotating your pelvis, flexing your spine to raise your hips off of the bench. Maintain a slight bend in the knees throughout the motion. After a brief pause, return the hips to the bench. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Reverse Hyperextension",
      type: "strength",
      muscle: "hamstrings",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Place your feet between the pads after loading an appropriate weight. Lay on the top pad, allowing your hips to hang off the back, while grasping the handles to hold your position. To begin the movement, flex the hips, pulling the legs forward. Reverse the motion by extending the hips, kicking the leg back. It is very important not to over-extend the hip on this movement, stopping short of your full range of motion. Return by again flexing the hip, pulling the carriage forward as far as you can. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell plyo push-up",
      type: "strength",
      muscle: "chest",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Place a kettlebell on the floor. Place yourself in a pushup position, on your toes with one hand on the ground and one hand holding the kettlebell, with your elbows extended. This will be your starting position. Begin by lowering yourself as low as you can, keeping your back straight. Quickly and forcefully reverse direction, pushing yourself up to the other side of the kettlebell, switching hands as you do so. Continue the movement by descending and repeating the movement back and forth."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Weighted Sit-Ups - With Bands",
      type: "strength",
      muscle: "abdominals",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Start out by strapping the bands around the base of the decline bench. Place the handles towards the inside of the decline bench so that when lying down, you can reach for both of them. Position your legs through the decline machine until they are secured. Now reach for the exercise bands with both hands. Use a pronated (palms forward) grip to grasp the handles. Position them near your collar bone and rotate your wrist to a neutral grip (palms facing the torso). Note: Your arms should remain stationary throughout the exercise. This is the starting position. Move your torso upward until your upper body is perpendicular to the floor while exhaling. Hold the contraction for a second and lower your upper body back down to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations: You can also use a stationary post and wrap the exercise band around it to perform this exercise. Simply lie down on the floor and use the same techniques as described above except this time you will not be on a decline bench. Note: If you are going to perform the exercise in this manner, it is best to have a partner hold your feet down."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Bodyweight Walking Lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Begin standing with your feet shoulder width apart and your hands on your hips. Step forward with one leg, flexing the knees to drop your hips. Descend until your rear knee nearly touches the ground. Your posture should remain upright, and your front knee should stay above the front foot. Drive through the heel of your lead foot and extend both knees to raise yourself back up. Step forward with your rear foot, repeating the lunge on the opposite leg."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying Machine Squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Adjust the leg machine to a height that will allow you to get inside it with your knees bent and the thighs slightly below parallel. Once you select the weight, position yourself inside the machine face up with the knees bent and thighs slightly below parallel to the platform. Make sure that the knees do not go past the toes. The angle created between the hamstrings and the calves should be one that is slightly less than 90 degrees (since your starting position requires you to start slightly below parallel). Your back and your head should be resting on the machine while your shoulders are pressed under the shoulder pads. Place your hands by the handles and position your feet slightly pointing out at a shoulder width position. This will be your starting position. While pressing with the balls of the feet as you breathe out, make your whole body erect as you squeeze the quads. Hold the contracted position for a second. Tip: Since you are starting below parallel, you can opt to use your hands to help you up by pressing on your thighs only on the first repetition. Slowly squat down as you inhale but instead of going all the way down to the starting position, just stop once your thighs are parallel to the platform. The angle between your hamstrings and calves should be a 90-degree angle. Repeat for the recommended amount of repetitions.  Caution: Keep your lower back and head pressed against the machine at all times. Variations: You can use a wide or close stance as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Leg Curl",
      type: "strength",
      muscle: "hamstrings",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Adjust the machine lever to fit your height and sit on the machine with your back against the back support pad. Place the back of lower leg on top of padded lever (just a few inches under the calves) and secure the lap pad against your thighs, just above the knees. Then grasp the side handles on the machine as you point your toes straight (or you can also use any of the other two stances) and ensure that the legs are fully straight right in front of you. This will be your starting position. As you exhale, pull the machine lever as far as possible to the back of your thighs by flexing at the knees. Keep your torso stationary at all times. Hold the contracted position for a second. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Caution: Do not ever use so much weight on the exercise that you start using swinging and jerking as you can risk both lower back injury and also a hamstring tear. Variations: Since you have three foot positions you have in reality three exercises."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Barbell Press Behind Neck",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "This exercise is best performed inside a squat rack for easier pick up of the bar. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Your back should be kept straight while performing this exercise. This will be your starting position. Elevate the barbell overhead by fully extending your arms while breathing out. Hold the contraction for a second and lower the barbell back down to the starting position by inhaling. Repeat for the recommended amount of repetitions.  Caution: Performing this exercise can cause serious injury if not performed properly. Make sure to keep your back straight when lowering and lifting the barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-Grip EZ-Bar Curl with Band",
      type: "strength",
      muscle: "biceps",
      equipment: "e-z_curl_bar",
      difficulty: "beginner",
      instructions: "Attach a band to each end of the bar. Take the bar, placing a foot on the middle of the band. Stand upright with a narrow, supinated grip on the EZ bar. The elbows should be close to the torso. This will be your starting position. While keeping the upper arms in place, flex the elbows to execute the curl. Exhale as the weight is lifted. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Alternating Kettlebell Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Place two kettlebells in front of your feet. Bend your knees slightly and push your butt out as much as possible. As you bend over to get into the starting position grab both kettlebells by the handles. Pull one kettlebell off of the floor while holding on to the other kettlebell. Retract the shoulder blade of the working side, as you flex the elbow, drawing the kettlebell towards your stomach or rib cage. Lower the kettlebell in the working arm and repeat with your other arm."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm side lying rear fly",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "While holding a dumbbell in one hand, lay with your chest down on a flat bench. The other hand can be used to hold to the leg of the bench for stability. Position the palm of the hand that is holding the dumbbell in a neutral manner (palms facing your torso) as you keep the arm extended with the elbow slightly bent. This will be your starting position. Now raise the arm with the dumbbell to the side until your elbow is at shoulder height and your arm is roughly parallel to the floor as you exhale. Tip: Maintain your arm perpendicular to the torso while keeping your arm extended throughout the movement. Also, keep the contraction at the top for a second. Slowly lower the dumbbell to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise with both arms at the same time and also keeping the palms of the hands facing back as opposed to facing your torso."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable shrug",
      type: "strength",
      muscle: "traps",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Grasp a cable bar attachment that is attached to a low pulley with a shoulder width or slightly wider overhand (palms facing down) grip. Stand erect close to the pulley with your arms extended in front of you holding the bar. This will be your starting position. Lift the bar by elevating the shoulders as high as possible as you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the bar. Only the shoulders should be moving up and down. Lower the bar back to the original position. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise with bands, barbells or dumbbell. You can also use a single handle and work one side at a time."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Pallof press with rotation",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Connect a standard handle to a tower, and position the cable to shoulder height. With your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately armâ€™s length away from the pulley, with the tension of the weight on the cable. Align outstretched arm with cable. With your feet positioned hip-width apart, pull the cable into your chest and grab the handle with your other hand. Both hands should be on the handle at this time. Facing forward, press the cable away from your chest. You core should be tight and engaged. Keeping your hips straight, twist your torso away from the pulley until you get a full quarter rotation. Maintain your rigid stance and straight arms. Return to the neutral position in a slow and controlled manner. Your arms should be extended in front of you. With the side tension still engaging your core, bring your hands to your chest and immediately press outward to a fully extended position. This constitutes one rep. Repeat to failure. Then, reposition and repeat the same series of movements on the opposite side.  Tip: The closer you keep your feet together, the greater the core activation. A wide base puts the pressure on your legs instead of your core."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying T-Bar Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Load up the T-bar Row Machine with the desired weight and adjust the leg height so that your upper chest is at the top of the pad. Tip: In some machines all you can do is stand on the appropriate step that allows you to be at a height that has the upper chest at the top of the pad. Lay face down on the pad and grab the handles. You can either use a palms down, palms up, or palms in position depending on what part of your back you want to emphasize. Lift the bar off the rack and extend your arms in front of you. This will be your starting position. As you exhale slowly pull the weight up and squeeze your back at the top of the movement. Tip: Keep the upper arms as close to the torso as possible throughout the movement in order to better engage the back muscles. Also, do not lift your body off of the pad at any time and refrain from using the biceps to lift the weight. After a second contraction at the top of the movement, as you inhale, slowly go back down to the starting position. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kneeling lat pull-down",
      type: "strength",
      muscle: "lats",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Select the appropriate weight using a pulley that is above your head. Attach a rope to the cable and kneel a couple of feet away, holding the rope out in front of you with both arms extended. This will be your starting position. Initiate the movement by flexing the elbows and fully retracting your shoulders, pulling the rope toward your upper chest with your elbows out. After pausing briefly, slowly return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Bent-Over One-Arm Dumbbell Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "With a dumbbell in one hand and the palm facing your torso, bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up. The upper arm should be close to the torso and parallel to the floor while the forearm is pointing towards the floor as the hand holds the weight. Tip: There should be a 90-degree angle between the forearm and the upper arm. This is your starting position. Keeping the upper arms stationary, use the triceps to lift the weights as you exhale until the forearms are parallel to the floor and the whole arm is extended. Like many other arm exercises, only the forearm moves. After a second contraction at the top, slowly lower the dumbbell back to the starting position as you inhale. Repeat the movement for the prescribed amount of repetitions. Switch arms and repeat the exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-Leg Leg Extension",
      type: "strength",
      muscle: "quadriceps",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Seat yourself in the machine and adjust it so that you are positioned properly. The pad should be against the lower part of the shin but not in contact with the ankle. Adjust the seat so that the pivot point is in line with your knee. Select a weight appropriate for your abilities. Maintaining good posture, fully extend one leg, pausing at the top of the motion. Return to the starting position without letting the weight stop, keeping tension on the muscle. Repeat for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lateral Raise - With Bands",
      type: "strength",
      muscle: "shoulders",
      equipment: "bands",
      difficulty: "beginner",
      instructions: "To begin, stand on an exercise band so that tension begins at arm's length. Grasp the handles using a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The handles should be resting on the sides of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position. Use your side shoulders to lift the handles to the sides as you exhale. Continue to lift the handles until they are slightly above parallel. Tip: As you lift the handles, slightly tilt the hand as if you were pouring water and keep your arms extended. Also, keep your torso stationary and pause for a second at the top of the movement. Lower the handles back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed using dumbbells or a pulley machine."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Leverage High Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Load an appropriate weight onto the pins and adjust the seat height so that you can just reach the handles above you. Adjust the knee pad to help keep you down. Grasp the handles with a pronated grip. This will be your starting position. Pull the handles towards your torso, retracting your shoulder blades as you flex the elbow. Pause at the bottom of the motion, and then slowly return the handles to the starting position. For multiple repetitions, avoid completely returning the weight to the stops to keep tension on the muscles being worked."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm dumbbell upright row",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Grab a dumbbell and stand up straight with your arm extended in front of you with a slight bend at the elbows and your back straight. This will be your starting position. Tip: The dumbbell should be resting on top of your thigh with the palm of your hands facing your thighs. Keep the other hand can be kept fully extended to the side, by the waist or grabbing a fixed surface. This will be your starting position. Use your side shoulders to lift the dumbbell as you exhale. The dumbbell should be close to the body as you move it up. Continue to lift it until the dumbbell is nearly in line with your chin. Tip: Your elbows should drive the motion. As you lift the dumbbell, your elbow should always be higher than your forearm. Also, keep your torso stationary and pause for a second at the top of the movement. Lower the dumbbell back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions and switch arms.  Caution: Be very careful with how much weight you use in this exercise. Too much weight leads to bad form, which in turn can cause shoulder injury. I've seen this too many times so please no jerking, swinging and cheating. Also, if you suffer from shoulder problems, you may want to stay away from upright rows and substitute by some form of lateral raises. Variations: This exercise can also be performed using a straight bar attached to a low pulley and it can also be performed using an e-z bar, cables and exercise band."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine behind-the-back shrug",
      type: "strength",
      muscle: "traps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "With the bar at thigh level, load an appropriate weight. Stand with the bar behind you, taking a shoulder-width, pronated grip on the bar and unhook the weight. You should be standing up straight with your head and chest up and your arms extended. This will be your starting position. Initiate the movement by shrugging your shoulders straight up. Do not flex the arms or wrist during the movement. After a brief pause return the weight to the starting position. Repeat for the desired number of repetitions before engaging the hooks to rack the weight."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell pirate ship",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "With a wide stance, hold a kettlebell with both hands. Allow it to hang at waist level with your arms extended. This will be your starting position. Initiate the movement by turning to one side, swinging the kettlebell to head height. Briefly pause at the top of the motion. Allow the bell to drop as you rotate to the opposite side, again raising the kettlebell to head height. Repeat for the desired amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Scaption",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "This corrective exercise strengthens the muscles that stabilize your shoulder blade. Hold a light weight in each hand, hanging at your sides. Your thumbs should pointing up. Begin the movement raising your arms out in front of you, about 30 degrees off center. Your arms should be fully extended as you perform the movement. Continue until your arms are parallel to the ground, and then return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Wrist Curl",
      type: "strength",
      muscle: "forearms",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Start out by placing a flat bench in front of a low pulley cable that has a straight bar attachment. Use your arms to grab the cable bar with a narrow to shoulder width supinated grip (palms up) and bring them up so that your forearms are resting against the top of your thighs. Your wrists should be hanging just beyond your knees. Start out by curling your wrist upwards and exhaling. Keep the contraction for a second. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting down by kneeling and using the bench as a resting position for your forearms. Your wrist can hang over the bench and the same movements as mentioned above can be performed. You can also use a dumbbell instead of a barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Upright Row - With Bands",
      type: "strength",
      muscle: "traps",
      equipment: "bands",
      difficulty: "beginner",
      instructions: "To begin, stand on an exercise band so that tension begins at arm's length. Grasp the handles using a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The handles should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position. Use your side shoulders to lift the handles as you exhale. The handles should be close to the body as you move them up. Continue to lift the handles until they nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the handles, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement. Lower the handles back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed using a straight or e-z bar. Another variation is to use dumbbells, though this later exercise should be reserved by the most advanced people that are well familiarized with correct execution."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Suspended Reverse Crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Secure a set of suspension straps with the handles hanging about a foot off of the ground. Move yourself into a pushup plank position facing away from the rack. Place your feet into the handles. You should maintain a straight posture, not allowing the hips to sag. This will be your starting position. Begin the movement by flexing the knees and hips, drawing the knees to your torso. As you do so, anteriorly tilt your pelvis, allowing your spine to flex. At the top of the controlled motion, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lateral lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Assume an athletic standing position, with the knees and hips slightly bent, feet shoulder-width apart, and the head and chest up. This will be your starting position. Staying low, take a slow, lateral step to the right. Keep your toes pointed forward and stay low. Extend the left knee, driving your weight to the right, flexing the knee and hip into a side lunge. Maintain good posture through the entire spine, keeping your head and chest up. Pause at the bottom of the motion, and then extend through the working leg to return to a standing position, transitioning into a lunge to the opposite side."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-Hands Push-Up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Get in the push-up position on your toes with your hands directly under your shoulders. Your body should be as straight as possible, maintaining the neutral alignment of your head. This is your start position. Allow your elbows to break as you lower your body toward the floor but donâ€™t allow it to touch. Keep your body as straight as possible. Your elbows should be pointing rearward, bent about 90 degrees, at the bottom position. Press back up through your hands to full arm extension. Repeat for the required number of reps."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Exercise ball hip thrust",
      type: "strength",
      muscle: "glutes",
      equipment: "exercise_ball",
      difficulty: "intermediate",
      instructions: "Lay on a ball so that your upper back is on the ball with your hips unsupported. Both feet should be flat on the floor, hip width apart or wider. This will be your starting position. Begin by extending the hips using your glutes and hamstrings, raising your hips upward as you bridge. Pause at the top of the motion and return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell side split squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck). Your feet should be placed wide apart with the foot of the lead leg angled out to the side. This will be your starting position. Lower your body towards the side of your angled foot by bending the knee and hip of your lead leg and while keeping the opposite leg only slightly bent. Breathe in as you lower your body. Return to the starting position by extending the hip and knee of the lead leg. Breathe out as you perform this movement. After performing the recommended amount of reps, repeat the movement with the opposite leg.  Variations: You can perform this movement with dumbbells."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "See-Saw Press (Alternating Side Press)",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Grab a dumbbell with each hand and stand up erect. Clean (lift) the dumbbells to the chest/shoulder level and then rotate your wrists so that your palms are facing towards you as if you were getting ready to perform an Arnold Press. This will be your starting position. Now start extending your left arm overhead as you rotate the wrist so that the palm of your hand faces forward as you go up. Your elbows should come out also as you lift the weight. Simultaneously, you will also be bending from your hip to your opposite side. Tip: If you perform the exercise correctly, is should look as if you are trying to reach for something overhead on the right hand side of your body, but with your left arm. Breathe out as you perform this movement. Once you reach the top position breathe in. Then, with the weight fully extended overhead and you bent over to your right hand side, begin the movement to the left side. Repeat for the recommended amount of repetitions.  Caution: Be extremely careful with the weight used as using a weight that you cannot control can cause back injury."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Frog Sit-Ups",
      type: "strength",
      muscle: "abdominals",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Lie with your back flat on the floor (or exercise mat) and your legs extended in front of you. Now bend at the knees and place your outer thighs by the floor (or mat) as you make the soles of your feet touch each other. Now try pushing both soles and bringing them up as near you as possible while you keep the outer thighs on the floor (or at least almost touching it). Tip: In this position your legs should create a diamond shape. Now, cross your arms in front of you by touching the opposite shoulders. This will be your starting position. As you exhale flatten your lower back to the floor while curling the torso upwards. Tip: This will be like performing the first 1/4 movement of a sit up. Hold at the top position for a second. As you inhale, slowly lower back to the starting position. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell Windmill",
      type: "strength",
      muscle: "abdominals",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Place a kettlebell in front of your lead foot and clean and press it overhead with your opposite arm. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulders. Rotate your wrist as you do so, so that the palm faces forward. Press it overhead by extending the elbow. Keeping the kettlebell locked out at all times, push your butt out in the direction of the locked out kettlebell. Turn your feet out at a forty-five degree angle from the arm with the locked out kettlebell. Bending at the hip to one side, sticking your butt out, slowly lean until you can touch the floor with your free hand. Keep your eyes on the kettlebell that you hold over your head at all times. Pause for a second after reaching the ground and reverse the motion back to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Leg Press",
      type: "strength",
      muscle: "quadriceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Adjust the bottom position of the machine and seat yourself. Select an appropriate load for your training, and then plant your feet a little wider than shoulder width on the platform. Grasp the handles, maintaining good spinal position with your chest up and your head looking forward. This will be your starting position. Driving through the heels of your feet, extend through the hips and knees to push the sled upward. Do not lock out your knees. After holding the top position for a movement, return to the starting position without fully returning the weight to the stack."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Straight-arm plank with biceps curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Place a dumbbell on the ground and set-up in the \"up\" position of a push-up: arms extended, back and neck in a straight line, and core tight, so that your right hand is a few inches to the left of the dumbbell. Keep your feet shoulder width apart. Shift your weight to your left hand (and foot) as you grip the dumbbell in your right hand. This will be your starting position. Complete a biceps curl with the right arm by flexing at the elbow and curling upwards towards your shoulder. Lower your arm by fully extending it to the starting position. This is one repetition. Repeat for recommended number of repetitions and then switch arms."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Deadlifts",
      type: "strength",
      muscle: "quadriceps",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Move the cables to the bottom of the towers and select an appropriate weight. Stand directly in between the uprights. To begin, squat down be flexing your hips and knees until you can reach the handles. After grasping them, begin your ascent. Driving through your heels extend your hips and knees keeping your hands hanging at your side. Keep your head and chest up throughout the movement. After reaching a full standing position, Return to the starting position and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable Seated Crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Seat on a flat bench with your back facing a high pulley. Grasp the cable rope attachment with both hands (with the palms of the hands facing each other) and place your hands securely over both shoulders. Tip: Allow the weight to hyperextend the lower back slightly. This will be your starting position. With the hips stationary, flex the waist so the elbows travel toward the hips. Breathe out as you perform this step. As you inhale, go back to the initial position slowly. Repeat for the recommended amount of repetitions.  Variation: Exercise bands can be used for this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell Figure 8",
      type: "strength",
      muscle: "abdominals",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Place one kettlebell between your legs and take a wider than shoulder width stance. Bend over by pushing your butt out and keeping your back flat. Pick up a kettlebell and pass it to your other hand between your legs. The receiving hand should reach from behind the legs. Go back and forth for several repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell Curtsy Lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Stand with your feet shoulder-width apart, holding a kettlebell at waist height in front of you with both hands. You should be looking straight forward, with your chest up and shoulders back. This will be your starting position. Initiate the movement by shifting your weight to your right foot, lifting your left from the ground. While keeping your torso facing forward, place your left leg behind your right, taking a wide, lateral step behind the front leg. Descend into a lunge by bending your knees, lowering your body straight down. Continue until your front knee is at approximately 90 degrees, and then drive through the heel and extend the knee and hip. As you come back up, return the back leg to the starting position. Alternate the movement; switch back and forth between both sides for the desired number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying bench reverse crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie on an exercise mat or a flat bench with your legs off the end. Place your hands either under your glutes with your palms down or by the sides holding on to the bench (or with palms down by the side on an exercise mat). Also extend your legs straight out. This will be your starting position. Bend your knees and pull your upper thighs into your midsection as you breathe out. Continue this movement until your knees are near your chest. Hold the contracted position for a second. As you breathe in, slowly return to the starting position. Repeat for the recommended amount of repetitions.  Variations: As you get more advanced, you can hold a dumbbell between your legs. You can also perform this exercise on a decline bench."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell speed squat",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance which targets overall development; however you can choose any of the three stances discussed in the foot stances section). Begin to lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly. Begin to raise the bar as fast as possible without involving momentum as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position. Note: You should perform these exercises as fast as possible but without breaking perfect form and without involving momentum. Repeat for the recommended amount of repetitions.  Caution: This is not an exercise to be taken lightly due to the speed that it requires. If you have back issues, substitute it with the dumbbell squat variation or a leg press instead. If you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Suspended row",
      type: "strength",
      muscle: "middle_back",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "Suspend your straps at around chest height. Take a handle in each hand and lean back. Keep your body erect and your head and chest up. Your arms should be fully extended. This will be your starting position. Begin by flexing the elbow to initiate the movement. Protract your shoulder blades as you do so. At the completion of the motion pause, and then return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Incline Bench Pull",
      type: "strength",
      muscle: "middle_back",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Grab a dumbbell in each hand and lie face down on an incline bench that is set to an incline that is approximately 30 degrees. Let the arms hang to your sides fully extended as they point to the floor. Turn the wrists until your hands have a pronated (palms down) grip. Now flare the elbows out. This will be your starting position. As you breathe out, start to pull the dumbbells up as if you are doing a reverse bench press. You will do this by bending at the elbows and bringing the upper arms up as you let the forearms hang. Continue this motion until the upper arms are at the same level as your back. Tip: The elbows will come out to the side and your upper arms and torso should make the letter \"T\" at the top of the movement. Hold the contraction at the top for a second. Slowly go back down to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variations: You can perform this same movement but with a neutral grip (palms facing each other). You can also use a barbell."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Around The Worlds",
      type: "strength",
      muscle: "chest",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Lay down on a flat bench holding a dumbbell in each hand with the palms of the hands facing towards the ceiling. Tip: Your arms should be parallel to the floor and next to your thighs. To avoid injury, make sure that you keep your elbows slightly bent. This will be your starting position. Now move the dumbbells by creating a semi-circle as you displace them from the initial position to over the head. All of the movement should happen with the arms parallel to the floor at all times. Breathe in as you perform this portion of the movement. Reverse the movement to return the weight to the starting position as you exhale.  Variations: None"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Tiger-bend push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Begin in the top position of a push-up: arms extended, back and neck in a straight line, and core tight with your hands slightly wider than shoulder width. This will be your starting position. Lower yourself to a bottom push-up position with your chest slightly above the floor. Rock backwards by bringing your elbows back and forearms to the ground, pushing through your palms. Your hips may rise slightly as you move back. This is OK. Transition back to the bottom push-up position by rocking forward. Then, push up to the starting position. This is one repetition. Repeat for the recommended number of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Face-down incline dumbbell biceps curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Grab a dumbbell on each hand and lie face down on an incline bench with your shoulders near top of the incline. Your knees can rest on the seat or your legs can be straddled to the sides (my preferred way). Let your arms extend and hang naturally in front of you so that they are perpendicular to the floor. Now keep your elbows in by your side and face the palms forward. This will be your starting position. Raise the dumbbells by contracting the biceps until your arms are fully flexed. Exhale as you perform this portion of the movement and ensure that only the forearms move. The upper arms should remain stationary at all times. Lower the dumbbells until your arms are fully extended. Repeat for the recommended amount of times.  Variations: You can perform using an e-z bar, a barbell or alternating arms. You can also use a cable machine as well."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Head Harness Neck Resistance",
      type: "strength",
      muscle: "neck",
      equipment: "other",
      difficulty: "beginner",
      instructions: "Place a neck strap on the floor at the end of a flat bench. Once you have selected the weights, sit at the end of the flat bench with your feet wider than shoulder width apart from each other. Your toes should be pointed out. Slowly move your torso forward until it is almost parallel with the floor. Using both hands, securely position the neck strap around your head. Tip: Make sure the weights are still lying on the floor to prevent any strain on the neck. Now grab the weight with both hands while elevating your torso back until it is almost perpendicular to the floor. Note: Your head and torso needs to be slightly tilted forward to perform this exercise. Now place both hands on top of your knees. This is the starting position. Slowly lower your neck down until your chin touches the upper part of your chest while breathing in. While exhaling, bring your neck back to the starting position. Repeat for the recommended amount of repetitions.  Caution: This exercise puts a lot of stress on the neck muscles and should be approached with caution. Any sudden jerk or movement can cause you to strain a neck muscle. It is best to practice the form at first without any weights to get used to the movements required for this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Shoulder Press - With Bands",
      type: "strength",
      muscle: "shoulders",
      equipment: "bands",
      difficulty: "beginner",
      instructions: "To begin, stand on an exercise band so that tension begins at arm's length. Grasp the handles and lift them so that the hands are at shoulder height at each side. Rotate the wrists so that the palms of your hands are facing forward. Your elbows should be bent, with the upper arms and forearms in line to the torso. This is your starting position. As you exhale, lift the handles up until your arms are fully extended overhead."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Band-assisted pull-up",
      type: "strength",
      muscle: "lats",
      equipment: "bands",
      difficulty: "intermediate",
      instructions: "Choke the band around the center of the pullup bar. You can use different bands to provide varying levels of assistance. Pull the end of the band down, and place one bent knee into the loop, ensuring it won't slip out. Take a medium to wide grip on the bar. This will be your starting position. Pull yourself upward by contracting the lats as you flex the elbow. The elbow should be driven to your side. Pull to the front, attempting to get your chin over the bar. Avoid swinging or jerking movements. After a brief pause, return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Bench Press-Wide Grip",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Load the bar to an appropriate weight for your training. Lay on the bench with your feet flat on the ground, driving through your hips. Your back should be arched, and your shoulder blades retracted. Take a wide, pronated grip outside of the rings on the bar. Remove the bar from the rack, holding the weight above your chest with your arms extended. This will be your starting position. Lower the bar to the sternum by flexing the elbows. Maintain control and do not bounce the bar off of your chest. Your lats should stay tight and elbows slightly drawn in. After touching your torso with the bar, extend the elbows to return the bar to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Seated Calf Raise",
      type: "strength",
      muscle: "calves",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Place a block about 12 inches in front of a flat bench. Sit on the bench and place the ball of your feet on the block. Have someone place a barbell over your upper thighs about 3 inches above your knees and hold it there. This will be your starting position. Raise up on your toes as high as possible as you squeeze the calves and as you breathe out. After a second contraction, slowly go back to the starting position. Tip: To get maximum benefit stretch your calves as far as you can. Repeat for the recommended amount of repetitions.  Variations: You can use the smith machine or the seated calf raise machine in order to perform this exercise. Alternatively, you can also use dumbbells by placing one on top of each thigh."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm side deadlift",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "expert",
      instructions: "Stand to the side of a barbell next to its center. Bend your knees and lower your body until you are able to reach the barbell. Grasp the bar as if you were grabbing a briefcase (palms facing you since the bar is sideways). You may need a wrist wrap if you are using a significant amount of weight. This is your starting position. Use your legs to help lift the barbell up while exhaling. Your arms should extend fully as bring the barbell up until you are in a standing position. Slowly bring the barbell back down while inhaling. Tip: Make sure to bend your knees while lowering the weight to avoid any injury from occurring. Repeat for the recommended amount of repetitions. Switch arms and repeat the movement.  Caution: This is not an exercise that is recommended for people with lower back problems. Also, jerking motions or doing too much weight can injure your back. Variations: The exercise can also be performed with a dumbbell as described above."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Sit-up",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Lie down on the floor placing your feet either under something that will not move or by having a partner hold them. Your legs should be bent at the knees. Place your hands behind your head and lock them together by clasping your fingers. This is the starting position. Elevate your upper body so that it creates an imaginary V-shape with your thighs. Breathe out when performing this part of the exercise. Once you feel the contraction for a second, lower your upper body back down to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations:  This exercise can be performed with a weighted plate being held by both arms resting on the chest. The way to perform this exercise is to cross your arms by making an X and grabbing the weighted plate. Note: Your hands will no longer be behind your head. This variation may be difficult to perform at first so start out using little to no weights until you feel comfortable with the movements."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Side Bridge",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Works your obliques and helps stabilize your spine. Lie on your side and support your body between your forearm and knee to your feet. Hold position for two to four seconds. Repeat on the other side. Build up to at least 60 seconds on each side of your body!"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Two-Arm Kettlebell Clean",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Place two kettlebells between your feet. To get in the starting position, push your butt back and look straight ahead. Clean the kettlebells to your shoulders by extending through the legs and hips as you raise the kettlebells towards your shoulders. Rotate your wrists as you do so. Lower the kettlebells back to the starting position and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Zottman Preacher Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "None",
      difficulty: "intermediate",
      instructions: "Grab a dumbbell in each hand and place your upper arms on top of the preacher bench or the incline bench. The dumbbells should be held at shoulder height and the elbows should be flexed. Hold the dumbbells with the palms of your hands facing down. This will be your starting position. As you breathe in, slowly lower the dumbbells keeping the palms down until your upper arm is extended and your biceps are fully stretched. Now rotate your wrists once you are at the bottom of the movement so that the palms of the hands are facing up. As you exhale, use your biceps to curl the weights up until they are fully contracted and the dumbbells are at shoulder height. Again, remember that to ensure full contraction you need to bring that small finger higher than the thumb. Squeeze the biceps hard for a second at the contracted position and rotate your wrists so that the palms are facing down again. Repeat for the recommended amount of repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Balance Board",
      type: "strength",
      muscle: "calves",
      equipment: "other",
      difficulty: "beginner",
      instructions: "Note: This exercise is designed to increase balance.  Place a balance board in front of you. Stand up on it and try to balance yourself. Hold the balance for as long as desired.  Caution: If your balance is poor, start out with one of the less challenging boards. Variations: You can perform this exercise using various types of balance boards. Some are more challenging than others."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Cable rope preacher hammer curl",
      type: "strength",
      muscle: "biceps",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Place a preacher bench about 2 feet in front of a pulley machine. Attach a straight bar to the low pulley. Sit at the preacher bench with your elbow and upper arms firmly on top of the bench pad and have someone hand you the bar from the low pulley. Grab the bar and fully extend your arms on top of the preacher bench pad. This will be your starting position. Now start pilling the weight up towards your shoulders and squeeze the biceps hard at the top of the movement. Exhale as you perform this motion. Also, hold for a second at the top. Now slowly lower the weight to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can also use an e-z bar attachment or even a single hand bar so that you can do one arm at a time. This exercise can also be performed with barbells, dumbbells, E-Z bar, and exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Bent-Over One-Arm Dumbbell Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Sit down at the end of a flat bench with a dumbbell in one arm using a neutral grip (palms of the hand facing you). Bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up. The upper arm with the dumbbell should be close to the torso and aligned with it (lifted up until it is parallel to the floor while the forearms are pointing towards the floor as the hands hold the weights). Tip: There should be a 90-degree angle between the forearms and the upper arm. This is your starting position. Keeping the upper arm stationary, use the triceps to lift the weight as you exhale until the forearm is parallel to the floor and the whole arm is extended. Like many other arm exercises, only the forearm moves. After a second contraction at the top, slowly lower the dumbbell back to the starting position as you inhale. Repeat the movement for the prescribed amount of repetitions. Switch arms and repeat the exercise.  Variations:  This exercise can be executed also with two arms at a time. Also, if you like the one arm variety, you can use a low pulley handle instead of a dumbbell for better peak contraction. In this case, the palms should be facing up (supinated grip) as opposed to the torso (neutral grip). You can also use a rope attachment however, and in this manner, you can also perform the movement with a neutral grip."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Double Kettlebell Push Press",
      type: "strength",
      muscle: "shoulders",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Clean two kettlebells to your shoulders. Squat down a few inches and reverse the motion rapidly. Use the momentum from the legs to drive thekettlebells overhead. Once the kettlebells are locked out, lower the kettlebells to your shoulders and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying oblique crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Start out by lying on your right side with your legs lying on top of each other. Make sure your knees are bent a little bit. Place your left hand behind your head. Once you are in this set position, begin by moving your left elbow up as you would perform a normal crunch except this time the main emphasis is on your obliques. Crunch as high as you can, hold the contraction for a second and then slowly drop back down into the starting position. Remember to breathe in during the eccentric (lowering) part of the exercise and to breathe out during the concentric (elevation) part of the exercise.  Note: While you cannot add resistance to this exercise you can concentrate on perfect execution and slow speed."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell front raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "Adopt a pronated, shoulder-width grip on the barbell from a standing position. Allow your arms to hang straight down to mid thigh with the elbows extended. Your head should face forward, with your shoulders back and your chest up. Maintain a neutral spine and contract your abs to provide core support. This will be your starting position. Initiate the movement by flexing the shoulder, raising the weight straight out in front of you. Keep the elbows extended and the wrist neutral throughout the movement. Continue the upward movement of the arms until the barbell is just above shoulder height. At the top of the motion, pause briefly, and then slowly return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Weighted donkey calf raise",
      type: "strength",
      muscle: "calves",
      equipment: "other",
      difficulty: "intermediate",
      instructions: "For this exercise you will need access to a donkey calf raise machine. Start by positioning your lower back and hips under the padded lever provided. The tailbone area should be the one making contact with the pad. Place both of your arms on the side handles and place the balls of your feet on the calf block with the heels extending off. Align the toes forward, inward or outward, depending on the area you wish to target, and straighten the knees without locking them. This will be your starting position. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Variations: If you don't have a machine available but have access to a calf block and a sturdy object to hold on to, you can perform this using as resistance a person sitting on your lower back (around the tailbone area)."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Machine Triceps Extension",
      type: "strength",
      muscle: "triceps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Adjust the seat to the appropriate height and make your weight selection. Place your upper arms against the pads and grasp the handles. This will be your starting position. Perform the movement by extending the elbow, pulling your lower arm away from your upper arm. Pause at the completion of the movement, and then slowly return the weight to the starting position. Avoid returning the weight all the way to the stops until the set is complete to keep tension on the muscles being worked."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Janda Sit-Up",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Note: This exercise was created by Czech exercise physiologist, Dr. Vladimir Janda and is one of the most challenging sit-up variations as it completely isolates the rectus abdominals by eliminating the hip flexors.  Position your body on the floor in the basic sit-up position; knees to a ninety degree angle with feet flat on the floor and arms either crossed over your chest or to the sides. This will be your starting position. As you strongly tighten your glutes and hamstrings, fill your lungs with air and in a slow (three to six second count) ascent, slowly exhale. Tip: It is important to tighten the glutes and hamstrings as this will cause the hip flexors to be inactivated in a process called reciprocal inhibition, which basically means that opposite muscles to the contracted ones will relax. As you inhale, slowly go back in a controlled manner to the starting position. Repeat for the recommended amount of repetitions.  Variations: The exercise can be done using a dedicated abdominal bench apparatus, having a workout partner exert pulling pressure on your calves (while you maintain your feet on the ground) or wrapping your legs over barbell and pulling back."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Seated Dumbbell Inner Biceps Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Sit on the end of a flat bench with a dumbbell in each hand being held at arms length. The elbows should be close to the torso. Rotate the palms of the hands so that they are facing inward in a neutral position. This will be your starting position. While holding the upper arms stationary, curl the dumbbells out and up, turning the palms out as you lift and keeping your forearms in line with your outer deltoids. Tips: Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the dumbbells back to the starting position as your breathe in. Remember to rotate your arms as you lower the dumbbells so that you can switch back to a neutral grip. Repeat for the recommended amount of repetitions.  Variations:  There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support. You can stand up while performing this exercise. You can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Close-grip hands-elevated push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height. Place your hands next to one another on the bar. Position your feet back from the bar with arms and body straight. This will be your starting position. Keeping your body straight, lower your chest to the bar by bending the arms. Return to the starting position by extending the elbows, pressing yourself back up."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Barbell Squat To A Bench",
      type: "strength",
      muscle: "quadriceps",
      equipment: "barbell",
      difficulty: "intermediate",
      instructions: "This exercise is best performed inside a squat rack for safety purposes. To begin, first place a flat bench or a box behind you. The flat bench is used to teach you to set your hips back and to hit depth.   Then, set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.   Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.   Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).   Begin to slowly lower the bar by bending the knees and sitting your hips back as you maintain a straight posture with the head up. Continue down until you slightly touch the bench behind you. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.   Begin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs and extend the hips to go back to the starting position.   Repeat for the recommended amount of repetitions.   Caution: This is not an exercise to be taken lightly. If you have back issues, substitute it with the dumbbell squat variation or a leg press instead. If you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more. The squat is a very safe exercise but only if performed properly. Variations: As previously mentioned, there are various stances that can be used depending on what you want to emphasize. You can also place a small block under the heels to improve balance. Dumbbells can be used as well for resistance by holding them to your sides. The use of wrist wraps is a necessity due to the amount of weights used. I find this an excellent variation when my lower back begins to act up after many weeks of regular barbell squats. (Note: For wide stance dumbbell squats you will have to hold the dumbbells in between your legs as opposed to both sides in order to be able to distance your legs sufficiently). Another way to perform these is by using a smith machine though I do not recommend this. The reason for not performing regular squats on the smith machine is that since the machine allows you to execute the exercise while leaning versus the bar, hip flexor involvement is minimized taking the hamstring out of the exercise. While this does take pressure off the lower back, hamstring involvement is a requirement to stabilize the knee-cap. So, as a result, what is created is a situation where destructive forces place a huge stress on the ACL (anterior cruciate ligament; a primary ligament in the knee capsule whose job is to provide knee stability) by pushing the knee-cap forward. For this reason, I highly recommend against smith machine use for squats and if you still insist on doing so, make sure it is a sporadic use rather than frequent, and also be sure to control the amount of weight used."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Incline Shoulder Raise",
      type: "strength",
      muscle: "shoulders",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Sit on an Incline Bench while holding a dumbbell on each hand on top of your thighs. Lift your legs up to kick the weights to your shoulders and lean back. Position the dumbbells above your shoulders with your arms extended. The arms should be perpendicular to the floor with your palms facing forward and knuckles pointing towards the ceiling. This will be your starting position. While keeping the arms straight and locked, lift the dumbbells by raising the shoulders from the bench as you breathe out. Bring back the dumbbells to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variations: You can use a barbell or a smith machine in order to perform this exercise."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Inner-Biceps Curl",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Stand up with a dumbbell in each hand being held at arms length. The elbows should be close to the torso. Your legs should be at about shoulder's width apart from each other. Rotate the palms of the hands so that they are facing inward in a neutral position. This will be your starting position. While holding the upper arms stationary, curl the weights out while contracting the biceps as you breathe out. Your wrist should turn so that when the weights are fully elevated you have supinated grip (palms facing up). Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: Keep the forearms aligned with your outer deltoids. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the dumbbells back to the starting position as your breathe in. Remember to rotate the wrists as you lower the weight in order to switch back to a neutral grip. Repeat for the recommended amount of repetitions.  Variations:  There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support. You can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm kettlebell swing",
      type: "strength",
      muscle: "hamstrings",
      equipment: "kettlebells",
      difficulty: "intermediate",
      instructions: "Place one kettlebell between your feet. Push back with your butt and bend your knees to get into the starting position. Make sure that your back isflat and look straight ahead. Swing the kettlebell between your legs forcefully. Quickly reverse the direction and drive though with your hipstaking the kettlebell straight out. Let the kettlebell swing back between your legs and repeat. Switch arms with each set. Pictures And Videos Courtesy Of artofstrength.com."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Pull Through",
      type: "strength",
      muscle: "glutes",
      equipment: "cable",
      difficulty: "beginner",
      instructions: "Begin standing a few feet in front of a low pulley with a rope or handle attached. Face away from the machine, straddling the cable, with your feet set wide apart. Begin the movement by reaching through your legs as far as possible, bending at the hips. Keep your knees slightly bent. Keeping your arms straight, extend through the hip to stand straight up. Avoid pulling upward through the shoulders; all of the motion should originate through the hips."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Leg Pull-In",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "Lie on an exercise mat with your legs extended and your hands either palms facing down next to you or under your glutes. Tip: My preference is with the hands next to me. This will be your starting position. Bend your knees and pull your upper thighs into your midsection as you breathe out. Continue the motion until your knees are around chest level. Contract your abs as you execute this movement and hold for a second at the top. Tip: As you perform the motion, the lower legs (calves) should always remain parallel to the floor. Return to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can hold a dumbbell between your feet to add resistance or you can also use an ankle attachment to add weight via a low pulley machine. Alternatively, you may also use exercise bands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Standing Leg Curl",
      type: "strength",
      muscle: "hamstrings",
      equipment: "machine",
      difficulty: "beginner",
      instructions: "Adjust the machine lever to fit your height and lie with your torso bent at the waist facing forward around 30-45 degrees (since an angled position is more favorable for hamstrings recruitment) with the pad of the lever on the back of your right leg (just a few inches under the calves) and the front of the right leg on top of the machine pad. Keeping the torso bent forward, ensure your leg is fully stretched and grab the side handles of the machine. Position your toes straight. This will be your starting position. As you exhale, curl your right leg up as far as possible without lifting the upper leg from the pad. Once you hit the fully contracted position, hold it for a second. As you inhale, bring the legs back to the initial position. Repeat for the recommended amount of repetitions. Perform the same exercise now for the left leg."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Isometric Neck Exercise - Sides",
      type: "strength",
      muscle: "neck",
      equipment: "body_only",
      difficulty: "beginner",
      instructions: "With your head and neck in a neutral position (normal position with head erect facing forward), place your left hand on the left side of your head. Now gently push towards the left as you contract the left neck muscles but resisting any movement of your head. Start with slow tension and increase slowly. Keep breathing normally as you execute this contraction. Hold for the recommended number of seconds. Now release the tension slowly. Rest for the recommended amount of time and repeat with your right hand placed on the right side of your head.  Variations: You can also do this exercise by placing your hands to the front and then to the back of your head. First do one side and then the next."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Lying cable chest fly",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "intermediate",
      instructions: "Position a flat bench between two low pulleys so that when you are laying on it, your chest will be lined up with the cable pulleys. Lay flat on the bench and keep your feet on the ground. Have someone hand you the handles on each hand. You will grab each single handle attachment with a palms up grip. Extend your arms by your side with a slight bend on your elbows. Tip: You will keep this bend constant through the whole movement. Your arms should be parallel to the floor. This is your starting position. Now start lifting the arms in a semi-circle motion directly in front of you by pulling the cables together until both hands meet at the top of the movement. Squeeze your chest as you perform this motion and breathe out during this movement. Also, hold the contraction for a second at the top. Tip: When performed correctly, at the top position of this movement, your arms should be perpendicular to your torso and the floor touching above your chest. Slowly come back to the starting position. Repeat for the recommended amount of repetitions.  Variations: Can also be done on an incline or decline bench, or with dumbbells or an exercise band."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Single-arm pull-down",
      type: "strength",
      muscle: "lats",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "Select an appropriate weight and adjust the knee pad to help keep you down. Grasp the handle with a pronated grip. This will be your starting position. Pull the handle down, squeezing your elbow to your side as you flex the elbow. Pause at the bottom of the motion, and then slowly return the handle to the starting position. For multiple repetitions, avoid completely returning the weight to keep tension on the muscles being worked."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Side Jackknife",
      type: "strength",
      muscle: "abdominals",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Works your obliques. Lying on your right side and keeping your left leg over your right one, place your right hand in a comfortable spot and clasp your left hand behind your head. Bring your torso and left leg toward each other as you pull with your obliques. Squeeze for a moment and return to the starting position. You can use ankle weights to make it tougher!"
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Dumbbell Walking Lunge",
      type: "strength",
      muscle: "quadriceps",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions: "Begin standing with your feet about hip-width apart and holding dumbbells in your hands down by your side. This will be your starting position. Step forward with one leg, flexing the knees to drop your hips. Descend until your rear knee nearly touches the ground. Your posture should remain upright, and your front knee should be in line with your front foot. Do not allow your front knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Drive through the heel of your lead foot and extend both knees to raise yourself back up. Step forward with your rear foot, repeating the lunge on the opposite leg."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Suspended push-up",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "intermediate",
      instructions: "Anchor your suspension straps securely to the top of a rack or other object. Leaning into the straps, take a handle in each hand and move into a push-up plank position. You should be as close to parallel to the ground as you can manage with your arms fully extended, maintaining good posture. Maintaining a straight, rigid torso, descend slowly by allowing the elbows to flex. Continue until your elbows break 90 degrees, pausing before you extend to return to the starting position."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Two-Arm Kettlebell Row",
      type: "strength",
      muscle: "middle_back",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Place two kettlebells in front of your feet. Bend your knees slightly and then push your butt out as much as possible as you bend over to get in the starting position. Grab both kettlebells and pull them to your stomach, retracting your shoulder blades and flexing the elbows. Keep your back straight. Lower and repeat."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "One Arm Floor Press",
      type: "strength",
      muscle: "triceps",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Lie down on a flat surface with your back pressing against the floor or an exercise mat. Make sure your knees are bent. Have a partner hand you the bar on one hand. When starting, your arm should be just about fully extended, similar to the starting position of a barbell bench press. However, this time your grip will be neutral (palms facing your torso). Make sure the hand you are not using to lift the weight is placed by your side. Begin the exercise by lowering the barbell until your elbow touches the ground. Make sure to breathe in as this is the eccentric (lowering part of the exercise). Then start lifting the barbell back up to the original starting position. Remember to breathe out during the concentric (lifting part of the exercise). Repeat until you have performed your recommended repetitions. Switch arms and repeat the movement.  Variations: You can also perform this exercise using dumbbells. By using dumbbells you will be able to isolate your chest and add some variety to your workouts. Caution: When you are done, do not drop the barbell or dumbbell next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. A better way to do this is to use both of your hands to grab the barbell or dumbbell and place it to your side. Simply move the barbell or dumbbell away from the arm you are exercising before dropping the weights. This will ensure optimal safety and prevent any injuries."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Kettlebell Pass Between The Legs",
      type: "strength",
      muscle: "abdominals",
      equipment: "kettlebells",
      difficulty: "beginner",
      instructions: "Place one kettlebell between your legs and take a comfortable stance. Bend over by pushing your butt out and keeping your back flat. Pick up a kettlebell and pass it to your other hand between your legs, in the fashion of a \"W\". Go back and forth for several repetitions."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Wide-Grip Decline Barbell Pullover",
      type: "strength",
      muscle: "chest",
      equipment: "barbell",
      difficulty: "beginner",
      instructions: "Lie down on a decline bench with both legs securely locked in position. Reach for the barbell behind the head using a pronated grip (palms facing out). Make sure to grab the barbell wider than shoulder width apart for this exercise. Slowly lift the barbell up from the floor by using your arms. When positioned properly, your arms should be fully extended and perpendicular to the floor. This is the starting position. Begin by moving the barbell back down in a semicircular motion as if you were going to place it on the floor, but instead, stop when the arms are parallel to the floor. Tip: Keep the arms fully extended at all times. The movement should only happen at the shoulder joint. Inhale as you perform this portion of the movement. Now bring the barbell up while exhaling until you are back at the starting position. Remember to keep full control of the barbell at all times. Repeat the movement for the prescribed amount of repetitions of your training program. When finished with your set, slowly lower the barbell back down until it is level with your head and release it.  Caution: It is a good idea to have a spotter for this exercise. Variations: You can also use an EZ bar or dumbbells to perform this movement."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Feet-elevated crunch",
      type: "strength",
      muscle: "abdominals",
      equipment: "exercise_ball",
      difficulty: "intermediate",
      instructions: "Lie flat on your back with your feet resting on an exercise ball and your knees bent at a 90 degree angle. Place your feet three to four inches apart and point your toes inward so they touch. Place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head. Push the small of your back down in the floor in order to better isolate your abdominal muscles. This will be your starting position. Begin to roll your shoulders off the floor and continue to push down as hard as you can with your lower back. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. Breathe out as you execute this portion of the movement. Squeeze your abdominals hard at the top of the contraction and hold for a second. Tip: Focus on a slow, controlled movement. Refrain from using momentum at any time. Slowly go back down to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variation: For the most advanced lifters, a weighted plate can be held in your hands."
    },
  })
  await prisma.Exercise.create({
    data: {
      name: "Smith machine upright row",
      type: "strength",
      muscle: "traps",
      equipment: "machine",
      difficulty: "intermediate",
      instructions: "To begin, set the bar on the smith machine to a height that is around the middle of your thighs. Once the correct height is chosen and the bar is loaded, grasp the bar using a pronated (palms forward) grip that is shoulder width apart. You may need some wrist wraps if using a significant amount of weight. Lift the barbell up and fully extend your arms with your back straight. There should be a slight bend at the elbows. This is the starting position. Use your side shoulders to lift the bar as you exhale. The bar should be close to the body as you move it up. Continue to lift it until it nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the bar, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement. Lower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Caution: Be very careful with how much weight you use in this exercise. Too much weight leads to bad form, which in turn can cause shoulder injury. I've seen this too many times so please no jerking, swinging and cheating. Also, if you suffer from shoulder problems, you may want to stay away from upright rows and substitute by some form of lateral raises. Variations: This exercise can also be performed using a barbell, E-Z bar, straight bar attached to a low pulley and it can also be performed using dumbbells, though this later exercise should be reserved by the most advanced people that are well familiarized with correct execution. Same as the Upright Barbell Row but with a Smith Machine."
    },
  })
  await prisma.User.create({
    data: {
      email: "sample1@sample.com",
      name: "William Li",
      password: "$2b$10$X8AEv25c3hyQZ1.c35nNPe93.UaZLnRiyu62BwJTSY70HZGz1OVSm"
    },
  })
  await prisma.User.create({
    data: {
      email: "sample2@sample.com",
      name: "Ngozi Nwabiani",
      password: "$2b$10$JKpGrN3a9mTp/moB5XU0pec9nJfbCsUayw2GORn95BQYycjFxwJ4e"
    },
  })
  await prisma.User.create({
    data: {
      email: "sample3@sample.com",
      name: "Anders Flotten",
      password: "$2b$10$8NeoQn4Ns0f/FwTz5MJ2reVYD.hhKWLYVt6DP8qCeLNnFnSFz4ndO"
    },
  })
  await prisma.Routine.create({
    data: {
      name: "Push-Day",
      userId: 1
    }
  })
  await prisma.Routine.create({
    data: {
      name: "Pull-Day",
      userId: 1
    }
  })
  await prisma.Routine.create({
    data: {
      name: "Quad Focused Leg-Day",
      userId: 1
    }
  })
  await prisma.Routine.create({
    data: {
      name: "Hamstring/Glute Focused Leg-Day",
      userId: 1
    }
  })
  await prisma.Routine.create({
    data: {
      name: "Shoulders-Abs",
      userId: 1
    }
  })

  await prisma.Enrollment.create({
    data: {
      routineId: 1,
      exerciseId: 32,
      reps: 10,
      sets: 3
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 1,
      exerciseId: 119,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 1,
      exerciseId: 348,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 1,
      exerciseId: 209,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 1,
      exerciseId: 380,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 2,
      exerciseId: 168,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 2,
      exerciseId: 202,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 2,
      exerciseId: 364,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 2,
      exerciseId: 358,
      reps: 10,
      sets: 2,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 2,
      exerciseId: 170,
      reps: 10,
      sets: 3,
    }
  }) 
  await prisma.Enrollment.create({
    data: {
      routineId: 2,
      exerciseId: 221,
      reps: 10,
      sets: 3,

    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 3,
      exerciseId: 94,
      reps: 10,
      sets: 4,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 3,
      exerciseId: 92,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 3,
      exerciseId: 481,
      reps: 20,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 3,
      exerciseId: 235,
      reps: 10,
      sets: 4,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 3,
      exerciseId: 163,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 4,
      exerciseId: 12,
      reps: 10,
      sets: 4,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 4,
      exerciseId: 15,
      reps: 10,
      sets: 4,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 4,
      exerciseId: 129,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 4,
      exerciseId: 315,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 5,
      exerciseId: 389,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 5,
      exerciseId: 420,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 5,
      exerciseId: 272,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 5,
      exerciseId: 214,
      reps: 10,
      sets: 3,
    }
  })
  await prisma.Enrollment.create({
    data: {
      routineId: 5,
      exerciseId: 215,
      reps: 10,
      sets: 3,
    }
  })

  await prisma.Routine.create({
    data: {
      name: "Legs, shoulders, and abs",
      userId: 2
    }
  })

  await prisma.Enrollment.create({
    data: {
      routineId: 6,
      exerciseId: 39,
      reps: 10,
      sets: 3,
    }
  })

  await prisma.Enrollment.create({
    data: {
      routineId: 6,
      exerciseId: 48,
      reps: 10,
      sets: 3,
    }
  })

  await prisma.Enrollment.create({
    data: {
      routineId: 6,
      exerciseId: 66,
      reps: 10,
      sets: 3,
    }
  })

  await prisma.Enrollment.create({
    data: {
      routineId: 6,
      exerciseId: 38,
      reps: 10,
      sets: 3,
    }
  })

  // Disconnect from the database
  await prisma.$disconnect()

}

seed()
  .catch(e => console.error(e))