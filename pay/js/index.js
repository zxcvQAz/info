const modal = document.querySelector(".modal");
const elmContainer = document.querySelector(".container");

/* ===== EVENT ===== */
function GetPlatform() {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
        return "Android";
    } else if (
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
        return "iOS";
    }
    return "Other";
}
function CopyEvent() {
    const elmCopies = document.querySelectorAll(".btn-copy");
    elmCopies.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            elmCopies.forEach((elm) => (elm.textContent = "Copy"));
            let number = btn.getAttribute("data-number");
            let temp = document.createElement("textarea");
            temp.value = number;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand("copy");
            document.body.removeChild(temp);
            btn.textContent = "Copied";
        });
    });
}

function MouseLeaveEvent() {
    const elmBank = document.querySelectorAll(".bank");
    elmBank.forEach((bank) => {
        bank.addEventListener("mouseleave", (e) => {
            let btn = bank.querySelector(".btn-copy");
            btn.textContent = "Copy";
        });
    });
}

function ShowModalEvent() {
    const elmShowModals = document.querySelectorAll(".btn-show-modal");
    elmShowModals.forEach((btn) =>
        btn.addEventListener("click", (e) => {
            let number = btn.getAttribute("data-number");
            ShowModal(number);
            btn.textContent = "Copied";
        })
    );
}

/* ===== MODAL ===== */
function ShowModal(number) {
    modal.classList.add("active");
    elmContainer.classList.add("blur");
    modal.querySelector("#transfer").addEventListener("click", (e) => {
        let link = "https://nhantien.momo.vn/" + number;
        let newWindow = window.open(link, "_blank");
        modal.querySelector("#dismiss").click();
        if (platform == "Android" || platform == "iOS") {
            setTimeout(() => {
                newWindow.close();
            }, 500);
        }
    });
}

function CloseModalEvent() {
    modal.querySelector("#dismiss").addEventListener("click", (e) => {
        modal.classList.remove("active");
        elmContainer.classList.remove("blur");
    });
}
ShowModalEvent();
CloseModalEvent();
CopyEvent();
MouseLeaveEvent();
