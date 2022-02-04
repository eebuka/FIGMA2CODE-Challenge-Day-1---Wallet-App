<template>
  <div class="group-9-1">
    <div class="rectangle-9-1"></div>
    <div class="flex-col-1">
      <div class="nike-air-max-2090 default--semi-bold--headline">Nike Air Max 2090</div>
      <div class="address-1 default--regular--body">15 Aug 2020</div>
    </div>
    <div class="text-1 default--semi-bold--headline">-$243.00</div>
  </div>
</template>

<script>
export default {
  name: "Group9",
};
</script>

<style>
.group-9-1,
.group-9-2 {
  align-items: flex-start;
  display: flex;
  margin-top: 16px;
  min-width: 349px;
}

.rectangle-9-1,
.rectangle-9-2 {
  background-color: var(--systemgray--06--light);
  border-radius: 25.5px;
  height: 51px;
  width: 51px;
}

.flex-col-1,
.flex-col-2 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 1px;
  min-height: 44px;
  width: 149px;
}

.nike-air-max-2090,
.nike-air-max-2090-1 {
  color: var(--systemblack--light);
  font-weight: 400;
  line-height: 22px;
  min-height: 22px;
  white-space: nowrap;
}

.address-1,
.address-2 {
  color: var(--systemgray--01--light);
  font-weight: 400;
  line-height: 20px;
  margin-top: 2px;
  min-height: 20px;
  white-space: nowrap;
}

.text-1,
.text-7 {
  color: var(--systemblack--light);
  font-weight: 400;
  line-height: 22px;
  margin-left: 51px;
  margin-top: 4px;
  min-height: 22px;
  min-width: 76px;
  text-align: right;
  white-space: nowrap;
}
</style>
