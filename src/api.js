export async function fetchGetLabels() {
  try {
    const res = await fetch("/labels");
    if (res.ok) {
      return await res.json();
    }
    throw Error("fetch error");
  } catch (e) {
    throw Error(e);
  }
}

export async function fetchPostLabels(data) {
  try {
    const res = await fetch("/labels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      return await res.json();
    }

    throw Error("라벨 생성 실패");
  } catch (e) {
    throw Error(e);
  }
}

export async function fetchDelayLabels() {
  try {
    const res = await fetch("/labels-delay");
    if (res.ok) {
      return await res.json();
    }
    throw Error("fetch error");
  } catch (e) {
    throw Error(e);
  }
}
